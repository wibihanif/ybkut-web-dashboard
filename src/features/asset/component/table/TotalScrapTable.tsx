import { Box, Table } from '@mantine/core';
import { TableRow } from './TotalScrapTableRow';
import { faker } from '@faker-js/faker';

export const TotalScrapTable: React.FC = () => {
  const tableRows = [];
  for (let i = 0; i < 10; i++) {
    tableRows.push(
      <TableRow
        assetName={faker.commerce.productName()}
        firstDepreciationDate={faker.datatype.datetime()}
      />,
    );
  }

  return (
    <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 2 }}>
      <Table verticalSpacing="xs" highlightOnHover striped>
        <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
          <tr>
            <th style={{ width: 300 }}>Asset Name</th>
            <th>First Depreciation Date</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Box>
  );
};
