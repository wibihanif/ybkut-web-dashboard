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
import { TableRow } from './ItemDepresiationTableRow';
import { useCallback, useState } from 'react';
import { SortOrder } from '~/types/pagination';
import { useDebouncedState } from '@mantine/hooks';
import { useGetDepreciationItemList } from '../../api/useGetDepreciationItemList';
import {
  IconAlertCircle,
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';

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

export const ItemDepreciationTable: React.FC = () => {
  const LIMIT_PER_PAGE = 10;

  const { classes } = useStyles();
  const [page, setPage] = useState<number>(1);

  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState(SortOrder.ASC);

  const { data: depreciationItemList, isLoading: isLoadingDepreciationItemList } =
    useGetDepreciationItemList({
      page,
      search: searchValue ? searchValue : undefined,
      sortBy,
      sortOrder,
    });

  const totalPage = Math.ceil((depreciationItemList?.meta?.total as number) / LIMIT_PER_PAGE);

  const tableRows = depreciationItemList?.data.map((depreciationItem, index) => {
    return (
      <TableRow
        assetName={depreciationItem.name}
        firstDepreciationDate={new Date(depreciationItem.runningDepreciation)}
        bookValue={Number(depreciationItem.bookValue)}
        valueResidual={Number(depreciationItem.valueResidual)}
        key={index}
      />
    );
  });

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Box py={8}>
          <Text color="#61677A" fw="bold" fz="sm" pb={20}>
            LIST ITEM DEPRECIATION
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
      <Box style={{ maxHeight: '400px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Asset Name</Text>

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
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8} align={'center'}>
                  <Text className={classes.tableHead}>First Depreciation Date</Text>

                  {sortBy === 'runningDepreciation' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('runningDepreciation', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('runningDepreciation', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Book Value</Text>

                  {sortBy === 'bookValue' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('bookValue', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('bookValue', SortOrder.DESC)}>
                      <IconSortAscendingLetters color="white" />
                    </ActionIcon>
                  )}
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Value Residual</Text>

                  {sortBy === 'valueResidual' && sortOrder === SortOrder.DESC ? (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('valueResidual', SortOrder.ASC)}>
                      <IconSortDescendingLetters color="white" />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      size="sm"
                      className={classes.tableHeadIcon}
                      onClick={() => handleSort('valueResidual', SortOrder.DESC)}>
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
          {!isLoadingDepreciationItemList && !depreciationItemList?.data.length && (
            <Flex align="center" justify="center" gap={10} style={{ height: '50vh' }}>
              <IconAlertCircle size={20} color="red" />
              <Text>Data Not Found</Text>
            </Flex>
          )}
          {isLoadingDepreciationItemList && (
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
