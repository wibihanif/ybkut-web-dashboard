import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface CurrentStockTableRowProps {
  batch: Date;
  median: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<CurrentStockTableRowProps> = ({ batch, median }) => {
  const { classes } = useStyles();

  const dateShown = format(batch, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{dateShown}</td>
      <td>{median}</td>
    </Box>
  );
};
