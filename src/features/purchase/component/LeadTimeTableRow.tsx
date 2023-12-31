import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import { StatusBadge } from '~/components/core/StatusBadge';

interface LeadTimeTableRowProps {
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

export const TableRow: React.FC<LeadTimeTableRowProps> = ({ productName, date, state }) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '350px' }}>{dateShown}</td>
      <td style={{ width: '700px' }}>{productName}</td>
      <td style={{ width: '350px' }}>
        <StatusBadge state={state} />
      </td>
    </Box>
  );
};
