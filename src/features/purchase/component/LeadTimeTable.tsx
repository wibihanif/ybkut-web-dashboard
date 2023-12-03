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
    <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 8 }}>
      <Table verticalSpacing="md" highlightOnHover striped>
        <thead style={{ backgroundColor: '#38a35a', color: 'white' }}>
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
