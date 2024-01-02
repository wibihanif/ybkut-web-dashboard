import { Box, createStyles } from '@mantine/core';

interface CurrentStockTableRowProps {
  productName: string;
  sum: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<CurrentStockTableRowProps> = ({ productName, sum }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '330px' }}>{productName}</td>
      <td style={{ width: '330px' }}>{sum}</td>
    </Box>
  );
};
