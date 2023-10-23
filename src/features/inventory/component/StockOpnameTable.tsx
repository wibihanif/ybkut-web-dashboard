import { Box, Table } from '@mantine/core';
import { stockOpnames } from '~/constant/stockOpname';
import { TableRow } from './StockOpnameTableRow';

export const StockOpenameTable: React.FC = () => {
  const tableRows = stockOpnames.map((stockOpname, index) => {
    return (
      <TableRow
        productName={stockOpname.productName}
        date={new Date(stockOpname.date)}
        state={stockOpname.state}
        key={index}
      />
    );
  });

  return (
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
  );
};
