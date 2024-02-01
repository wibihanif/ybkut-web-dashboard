import { Box, createStyles } from '@mantine/core';
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

export const TableRow: React.FC<StockOpnameTableRowProps> = ({ productName, date, state }) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyyy');

  // disabling status badge just because we still dont know what the response is
  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '218px' }}>{dateShown}</td>
      <td style={{ width: '218px' }}>{productName}</td>
      <td style={{ width: '225px' }}>
        {/* <StatusBadge state={state} /> */}
        {state}
      </td>
    </Box>
  );
};
