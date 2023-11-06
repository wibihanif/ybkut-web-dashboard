import { Box, Flex, Pagination, Table } from '@mantine/core';
import { TableRow } from './StockOpnameTableRow';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';
import { useState } from 'react';

export const StockOpenameTable: React.FC = () => {
  const [page, setPage] = useState<number>(1);

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
      <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table verticalSpacing="md" highlightOnHover striped>
          <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
            <tr>
              <th style={{ color: 'white' }}>Date</th>
              <th style={{ color: 'white' }}>Product Name</th>
              <th style={{ color: 'white' }}>State</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>
      </Box>
      <Pagination
        mt={20}
        color="blue"
        value={page}
        onChange={setPage}
        total={15}
        sx={{ alignSelf: 'center' }}
      />
    </Flex>
  );
};
