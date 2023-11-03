import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface TimePurchaseTableRowProps {
  days: Date;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TimePurchaseTableRowProps> = ({ days }) => {
  const { classes } = useStyles();
  const dateShown = format(days, 'dd/MM/yyy');
  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{dateShown}</td>
      {/* <td>{total}</td> */}
    </Box>
  );
};
