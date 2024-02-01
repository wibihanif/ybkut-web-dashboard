import { ActionIcon, Box, Flex, Input, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './CurrentStockTableRow';
import { useState } from 'react';
import { IconSearch, IconSortDescendingLetters } from '@tabler/icons-react';
import { useGetCurrentStocksDetail } from '../../api/useGetCurrentStocksDetail';
import { useDebouncedState } from '@mantine/hooks';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: '#a6b2df',
      },
    },
  };
});

const LIMIT_PER_PAGE = 10;

export const CurrentStockTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const { data: currentStocksDetail } = useGetCurrentStocksDetail({
    page,
    search: searchValue,
  });

  const tableRows = currentStocksDetail?.data.map((currentStock, index) => {
    return (
      <>
        <TableRow productName={currentStock.name} sum={Number(currentStock.sum)} key={index} />
      </>
    );
  });

  const totalPage = Math.ceil((currentStocksDetail?.meta?.total as number) / LIMIT_PER_PAGE);

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
          <thead style={{ backgroundColor: '#3845a3', color: 'white', display: 'block' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '50%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Sum</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
            {tableRows}
          </tbody>
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
