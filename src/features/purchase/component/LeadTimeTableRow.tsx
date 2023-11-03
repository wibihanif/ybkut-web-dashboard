import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

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
      <td>{dateShown}</td>
      <td>{productName}</td>
      <td>{state}</td>
    </Box>
  );
};
