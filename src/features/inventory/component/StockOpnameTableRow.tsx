import { Box, createStyles } from '@mantine/core';

interface StockOpnameTableRowProps {
  productName: string;
  date: Date;
  state: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<StockOpnameTableRowProps> = ({ productName, date, state }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{date.toISOString()}</td>
      <td>{productName}</td>
      <td>{state}</td>
    </Box>
  );
};
