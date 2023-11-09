import { faker } from '@faker-js/faker';
import {
  Box,
  Pagination,
  Paper,
  ScrollArea,
  Stack,
  Table,
  Text,
  createStyles,
} from '@mantine/core';
import { TableRow } from './TableRow';
import { useState } from 'react';

const TOTAL_ROW = 50;

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'white', fontSize: '12px' },
  };
});

export const TotalInventoryTable: React.FC = () => {
  const { classes } = useStyles();

  const [page, setPage] = useState(1);

  const tableRows = [];
  for (let i = 0; i < TOTAL_ROW; i++) {
    tableRows.push(
      <TableRow
        date={faker.datatype.datetime()}
        quantity={faker.datatype.number().toString()}
        product={faker.person.fullName()}
        totalValue={faker.datatype.number().toString()}
        unitMeasures={faker.finance.currencyName()}
      />,
    );
  }

  return (
    <Paper p="md">
      <Stack>
        <Box py={20} component={ScrollArea}>
          <Table mb="lg" verticalSpacing="md" highlightOnHover>
            <thead style={{ backgroundColor: '#3392E7' }}>
              <tr>
                <th style={{ width: '200px' }}>
                  <Text className={classes.tableHead}>Date</Text>
                </th>
                <th style={{ width: '350px' }}>
                  <Text className={classes.tableHead}>Product</Text>
                </th>
                <th>
                  <Text className={classes.tableHead}>Quantity</Text>
                </th>
                <th>
                  <Text className={classes.tableHead}>Unit Measures</Text>
                </th>
                <th style={{ width: '200px' }}>
                  <Text className={classes.tableHead}>Total Value</Text>
                </th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Box>
        <Pagination
          value={page}
          onChange={setPage}
          total={15}
          sx={{ alignSelf: 'center' }}
          color="blue"
        />
      </Stack>
    </Paper>
  );
};
