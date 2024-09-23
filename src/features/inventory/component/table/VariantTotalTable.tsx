import {
  ActionIcon,
  Box,
  Flex,
  Input,
  Loader,
  Pagination,
  Table,
  Text,
  createStyles,
} from '@mantine/core';
import { TableRow } from './VariantTotalTableRow';
import { useCallback, useState } from 'react';
import {
  IconAlertCircle,
  IconSearch,
  IconSortDescendingLetters,
  IconSortAscendingLetters,
} from '@tabler/icons-react';
import { useGetTotalVariants } from '../../api/useGetTotalVariants';
import { useDebouncedState } from '@mantine/hooks';
import { SortOrder } from '~/types/pagination';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#3845a3',
      },
    },
  };
});

const LIMIT_PER_PAGE = 10;

export const VariantTotalTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);

  const { data: totalVariants, isLoading: isLoadingTotalVariants } = useGetTotalVariants({
    page,
    search: searchValue ? searchValue : undefined,
    sortBy,
    sortOrder,
  });

  const tableRows = totalVariants?.data.map((totalVariant, index) => {
    return (
      <TableRow productName={totalVariant.name} total={Number(totalVariant.total)} key={index} />
    );
  });

  const totalPage = Math.ceil((totalVariants?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  return (
    <Flex direction="column" style={{ height: '100%' }}>
      <Flex justify="space-between">
        <Box py={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            TOTAL VARIAN
          </Text>
        </Box>
        <Box w="50%">
          <Input
            placeholder="Search here"
            onChange={event => setSearchValue(event.target.value as string)}
            icon={<IconSearch size={16} color="#3845a3" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        </Box>
      </Flex>
      <Box style={{ borderRadius: 8, flexGrow: 1 }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  {sortBy === 'name' && sortOrder === SortOrder.ASC && (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                  {sortBy === 'name' && sortOrder === SortOrder.DESC && (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex>
                  <Text className={classes.tableHead}>Total</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
            {tableRows}
          </tbody>
          {!isLoadingTotalVariants && !totalVariants?.data.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '50vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingTotalVariants && (
            <Flex direction="column" align="center" justify="center" style={{ height: '50vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>
      {!!totalVariants?.data.length && (
        <Pagination
          mt={20}
          value={page}
          onChange={setPage}
          total={totalPage}
          color="indigo"
          variant="filled"
          sx={{ alignSelf: 'center' }}
        />
      )}
    </Flex>
  );
};
