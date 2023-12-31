import { Box, createStyles } from '@mantine/core';

interface VariantTotalTableRowProps {
  productName: string;
  total: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<VariantTotalTableRowProps> = ({ productName, total }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '330px' }}>{productName}</td>
      <td style={{ width: '330px' }}>{total}</td>
    </Box>
  );
};
