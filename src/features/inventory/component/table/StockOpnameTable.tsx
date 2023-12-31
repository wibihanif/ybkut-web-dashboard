import { ActionIcon, Box, Flex, Input, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './StockOpnameTableRow';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';
import { IconSearch, IconSortDescendingLetters } from '@tabler/icons-react';
import { FilterState } from './FilterState';

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

export const StockOpenameTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState<number>(1);
  const [filterState, setFilterState] = useState<string>('');

  const tableRows = [];

  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        productName={faker.commerce.productName()}
        date={faker.datatype.datetime()}
        state={faker.helpers.arrayElement(['Pending', 'Success', 'Canceled'])}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
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
      <Box style={{ borderRadius: 8 }}>
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
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '33%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Product Name</Text>
                  <ActionIcon size="sm" className={classes.tableHeadIcon}>
                    <IconSortDescendingLetters color="white" />
                  </ActionIcon>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '34%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>State</Text>
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
      <Pagination
        mt={20}
        value={page}
        onChange={setPage}
        total={15}
        color="indigo"
        variant="filled"
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
