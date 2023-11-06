import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import { StatusBadge } from '~/components/core/StatusBadge';

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

const statusBadgeStyle: Record<string, any> = {
  PENDING: {
    text: 'Pending',
    bgColor: 'Yellow',
  },
  CANCELED: {
    text: 'Canceled',
    bgColor: 'Red',
  },
  SUCCESS: {
    text: 'Success',
    bgColor: 'Green',
  },
  Pending: {
    text: 'Pending',
    bgColor: 'Yellow',
  },
  Canceled: {
    text: 'Canceled',
    bgColor: 'Red',
  },
  Success: {
    text: 'Success',
    bgColor: 'Green',
  },
};

export const TableRow: React.FC<StockOpnameTableRowProps> = ({ productName, date, state }) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{dateShown}</td>
      <td>{productName}</td>
      <td>
        <StatusBadge state={state} />
      </td>
    </Box>
  );
};
