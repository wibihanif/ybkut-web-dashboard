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
import { TableRow } from './StockOpnameTableRow';
import { useCallback, useState } from 'react';
import {
  IconAlertCircle,
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { FilterState } from './FilterState';
import { useDebouncedState } from '@mantine/hooks';
import { useGetStocksOpname } from '../../api/useGetStocksOpname';
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

export const StockOpnameTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [filterState, setFilterState] = useState<string>('');
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);

  const { data: stocksOpname, isLoading: isLoadingStocksOpname } = useGetStocksOpname({
    page,
    search: searchValue ? searchValue : undefined,
    sortBy,
    sortOrder,
  });

  const tableRows = stocksOpname?.data.map((stockOpname, index) => {
    return (
      <>
        <TableRow
          productName={stockOpname.name}
          date={new Date(stockOpname.date)}
          state={stockOpname.state}
          key={index}
        />
      </>
    );
  });

  const totalPage = Math.ceil((stocksOpname?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  return (
    <Flex direction="column" style={{ height: '100%' }}>
      <Flex justify="space-between">
        <Box p={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            STOCK OPNAME
          </Text>
        </Box>
        <Flex w="60%" gap={15}>
          <Box w="80%">
            <Input
              placeholder="Search here"
              onChange={event => setSearchValue(event.target.value as string)}
              icon={<IconSearch size={16} color="#3845a3" />}
              radius={10}
              sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
            />
          </Box>
          <Box>
            <FilterState filterState={filterState} setFilterState={setFilterState} />
          </Box>
        </Flex>
      </Flex>
      <Box style={{ borderRadius: 8, flexGrow: 1 }}>
        <Table
          verticalSpacing="md"
          highlightOnHover
          striped
          style={{ overflow: 'auto', display: 'block', borderRadius: 8 }}>
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Date</Text>
                  {sortBy === 'date' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('date', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('date', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  {sortBy === 'name' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('name', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '34%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
                  {sortBy === 'state' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('state', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('state', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
            {tableRows}
          </tbody>
          {!isLoadingStocksOpname && !stocksOpname?.data.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '50vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingStocksOpname && (
            <Flex direction="column" align="center" justify="center" style={{ height: '50vh' }}>
              <Loader color="blue" />
            </Flex>
          )}
        </Table>
      </Box>

      {!!stocksOpname?.data.length && (
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
