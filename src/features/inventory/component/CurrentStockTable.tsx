import { Box, Table } from '@mantine/core';
import { TableRow } from './CurrentStockTableRow';
import { stocks } from '~/constant/stock';

export const CurrentStockTable: React.FC = () => {
  const tableRows = stocks.map((stock, index) => {
    return <TableRow productName={stock.productName} sum={stock.sum} key={index} />;
  });

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
