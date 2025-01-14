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
import { TableRow } from './TotalScrapTableRow';
import { useCallback, useState } from 'react';
import {
  IconAlertCircle,
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { useDebouncedState } from '@mantine/hooks';
import { useGetScrapProductList } from '../../api/useGetScrapProductList';
import { SortOrder } from '~/types/pagination';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'black' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: 'rgba(239, 246, 255, 1)',
      },
    },
  };
});

export const TotalScrapTable: React.FC = () => {
  const LIMIT_PER_PAGE = 10;

  const { classes } = useStyles();

  const [searchValue, setSearchValue] = useDebouncedState('', 300);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);
  const [page, setPage] = useState<number>(1);

  const { data: scrapProduct, isLoading: isLoadingScrapProducts } = useGetScrapProductList({
    page,
    search: searchValue ? searchValue : undefined,
    sortBy,
    sortOrder,
  });

  const tableRows = scrapProduct?.data.map((scrapProduct, index) => (
    <TableRow
      key={index}
      assetName={scrapProduct.name}
      firstDepreciationDate={new Date(scrapProduct.runningDepreciation)}
    />
  ));

  const totalPage = Math.ceil((scrapProduct?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Box py={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            SCRAP PRODUCT TABLE
          </Text>
        </Box>
        <Box w="50%">
          <Input
            placeholder="Search here"
            onChange={event => setSearchValue(event.target.value as string)}
            icon={<IconSearch size={16} color="rgba(239, 246, 255, 1)" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        </Box>
      </Flex>
      <Box style={{ maxHeight: '400px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: 'rgba(239, 246, 255, 1)', color: 'black' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'black', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Asset Name</Text>

                  {sortBy === 'name' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="black" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="black" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'black', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>First Depreciation Date</Text>

                  {sortBy === 'runningDepreciation' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('runningDepreciation', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="black" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('runningDepreciation', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="black" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
            {tableRows}
          </tbody>
          {!isLoadingScrapProducts && !scrapProduct?.data.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '50vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingScrapProducts && (
            <Flex direction="column" align="center" justify="center" style={{ height: '50vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>
      <Pagination
        mt={20}
        color="green"
        value={page}
        onChange={setPage}
        total={totalPage}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
