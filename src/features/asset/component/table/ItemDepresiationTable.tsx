import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';
import { TableRow } from './ItemDepresiationTableRow';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

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

export const ItemDepreciationTable: React.FC = () => {
  const { classes } = useStyles();
  const [page, setPage] = useState<number>(1);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        assetName={faker.commerce.productName()}
        bookValue={faker.datatype.number({ min: 100000, max: 100000000 })}
        firstDepreciationDate={faker.datatype.datetime()}
        monthsPeriod={faker.datatype.number({ min: 1, max: 10 })}
        key={i}
      />,
    );
  }

  return (
    <Flex direction="column">
      <Box style={{ maxHeight: '400px', overflowY: 'hidden', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
            <tr style={{ display: 'table', width: '100%' }}>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Asset Name</Text>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Book Value</Text>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>First Depreciation Date</Text>
                </Flex>
              </th>
              <th style={{ color: 'white', width: '25%' }}>
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Period(months)</Text>
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
        color="green"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
