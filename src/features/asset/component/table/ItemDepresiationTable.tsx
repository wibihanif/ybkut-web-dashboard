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
      {/* <Box style={{ borderRadius: 2 }}>
        <Table verticalSpacing="xs" highlightOnHover striped>
          <thead>
            <tr>
              <th style={{ minWidth: 280 }}>Asset Name</th>
              <th>Book Value</th>
              <th>First Depreciation Date</th>
              <th>Period(months)</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box> */}

      <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 8 }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#a37538', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Asset Name</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Book Value</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>First Depreciation Date</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Period(months)</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
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
