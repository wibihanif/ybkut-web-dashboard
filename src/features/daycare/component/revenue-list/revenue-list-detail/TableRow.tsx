import { Box, createStyles } from '@mantine/core';

interface TableRowProps {
  month: string;
  qty: number;
  state: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({ month, qty, state }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{month}</td>
      <td>{qty}</td>
      <td>{state}</td>
    </Box>
  );
};
