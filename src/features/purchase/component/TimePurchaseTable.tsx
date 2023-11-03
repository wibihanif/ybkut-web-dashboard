import { Box, Table } from '@mantine/core';
import { faker } from '@faker-js/faker';
import { TableRow } from './TimePurchaseTableRow';
import { totalProduct } from '~/constant/totalProduct';

export const TimePurchaseTable: React.FC = () => {
  const tableRows = [];
  for (let i = 0; i < totalProduct; i++) {
    tableRows.push(<TableRow days={faker.datatype.datetime()} key={i} />);
  }

  return (
    <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <Table verticalSpacing="md" highlightOnHover striped>
        <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
          <tr>
            <th style={{ color: 'white' }}>Product Name</th>
            <th style={{ color: 'white' }}>Total</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Box>
  );
};
