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
import { TableRow } from './CurrentStockTableRow';
import { useCallback, useState } from 'react';
import {
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { useGetCurrentStocksDetail } from '../../api/useGetCurrentStocksDetail';
import { useDebouncedState } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
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

const LIMIT_PER_PAGE = 10;

export const CurrentStockTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);

  const { data: currentStocksDetail, isLoading: isLoadingCurrentStocksDetail } =
    useGetCurrentStocksDetail({
      page,
      search: searchValue ? searchValue : undefined,
      sortBy,
      sortOrder,
    });

  const tableRows = currentStocksDetail?.data.map((currentStock, index) => {
    return <TableRow productName={currentStock.name} sum={Number(currentStock.sum)} key={index} />;
  });

  const totalPage = Math.ceil((currentStocksDetail?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  return (
    <Flex direction="column" style={{ height: '100%' }}>
      <Flex justify="space-between">
        <Box py={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            CURRENT STOCK
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
      <Box
        style={{
          borderRadius: 8,
          flexGrow: 1,
        }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead
            style={{ backgroundColor: 'rgba(239, 246, 255, 1)', color: 'black', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'black', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>

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
                  <Text className={classes.tableHead}>Sum</Text>
                  {sortBy === 'sum' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('sum', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="black" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('sum', SortOrder.DESC)}>
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
          {!isLoadingCurrentStocksDetail && !currentStocksDetail?.data.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '50vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingCurrentStocksDetail && (
            <Flex direction="column" align="center" justify="center" style={{ height: '50vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>

      {!!currentStocksDetail?.data.length && (
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
