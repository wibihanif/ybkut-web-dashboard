import { Box, Table } from '@mantine/core';
import { TableRow } from './CurrentStockTableRow';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';

export const CurrentStockTable: React.FC = () => {
  const tableRows = [];
  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(
      <TableRow
        productName={faker.commerce.productName()}
        sum={faker.datatype.number({ min: 10, max: 100 })}
        key={i}
      />,
    );
  }

  return (
    <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <Table verticalSpacing="md" highlightOnHover striped>
        <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
          <tr>
            <th style={{ color: 'white' }}>Product Name</th>
            <th style={{ color: 'white' }}>Sum</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Box>
  );
};
