import { Box, createStyles } from '@mantine/core';
import Barcode from 'react-barcode';

interface TableRowProps {
  name: string;
  state: string;
  purchaseCount: string;
  estimatedCost: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  estimatedCost,
  name,
  purchaseCount,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '276px' }}>{name}</td>
      <td style={{ width: '276px' }}>{estimatedCost}</td>
      <td style={{ width: '276px' }}>{purchaseCount}</td>
      <td style={{ width: '276px' }}>{state}</td>
    </Box>
  );
};
