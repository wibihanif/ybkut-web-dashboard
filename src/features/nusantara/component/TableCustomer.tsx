import { Box, Flex, Pagination, Table, Text, createStyles } from '@mantine/core';

import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { TableRow } from './TableDORegulerRow';

const useStyles = createStyles(() => {
  return {
    tableHead: { color: 'black' },
    tableHeadIcon: {
      ':hover': {
        backgroundColor: 'rgba(253, 224, 71, 1)',
      },
    },
  };
});

export const TableCustomer: React.FC = () => {
  const { classes } = useStyles();
  const [page, setPage] = useState<number>(0);

  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        batch={faker.datatype.datetime()}
        median={faker.datatype.number({ min: 70, max: 100 })}
      />,
    );
  }

  return (
    <Flex
      direction="column"
      className="border text-white text-lg p-5"
      style={{
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        padding: 10,

        backgroundColor: 'transparent',
        border: '1px solid #31313d',
        // transition: 'transform 0.3s ease-in-out',
      }}>
      TOP 5 CUSTOMERS
      <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#f0c800', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Batch</Text>
                </Flex>
              </th>
              <th style={{ color: 'white' }}>
                {' '}
                <Flex gap={8}>
                  <Text className={classes.tableHead}>Rata-rata</Text>
                </Flex>
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        color="yellow"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
