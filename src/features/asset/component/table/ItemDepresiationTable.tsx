import { Box, Table } from '@mantine/core';
import { TableRow } from './ItemDepresiationTableRow';
import { faker } from '@faker-js/faker';

export const ItemDepreciationTable: React.FC = () => {
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
    <Box style={{ maxHeight: '400px', overflowY: 'auto', borderRadius: 2 }}>
      <Table verticalSpacing="xs" highlightOnHover striped>
        <thead style={{ backgroundColor: '#3392E7', color: 'white' }}>
          <tr>
            <th>Asset Name</th>
            <th>Book Value</th>
            <th>First Depreciation Date</th>
            <th>Period(months)</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Box>
  );
};
