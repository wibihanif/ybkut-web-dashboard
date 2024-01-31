import { Box, Table } from '@mantine/core';
import { TableRow } from './LeadTimeTableRow';
import { faker } from '@faker-js/faker';
import { totalProduct } from '~/constant/totalProduct';

export const LeadTimeTable: React.FC = () => {
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
    <Box style={{ maxHeight: '400px', overflowY: 'hidden', borderRadius: 8 }}>
      <Table verticalSpacing="md" highlightOnHover striped>
        <thead style={{ backgroundColor: '#3845a3', color: 'white' }}>
          <tr style={{ display: 'table', width: '100%' }}>
            <th style={{ color: 'white', width: '25%' }}>Date</th>
            <th style={{ color: 'white', width: '50%' }}>Product Name</th>
            <th style={{ color: 'white', width: '25%' }}>State</th>
          </tr>
        </thead>
        <tbody style={{ display: 'block', overflow: 'auto', maxHeight: '400px' }}>
          {tableRows}
        </tbody>
      </Table>
    </Box>
  );
};
