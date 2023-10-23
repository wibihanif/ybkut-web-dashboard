import { Box, Table } from '@mantine/core';
import { variants } from '~/constant/variant';
import { TableRow } from './VariantTotalTableRow';

export const VariantTotalTable: React.FC = () => {
  const tableRows = variants.map((variant, index) => {
    return <TableRow productName={variant.productName} total={variant.total} key={index} />;
  });

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
