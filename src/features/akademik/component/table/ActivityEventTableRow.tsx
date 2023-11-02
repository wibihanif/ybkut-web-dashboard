import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  event: string;
  date: Date;
  totalStudent: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<ActivityEventTableRowProps> = ({ date, event, totalStudent }) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{event}</td>
      <td>{dateShown}</td>
      <td>{totalStudent}</td>
    </Box>
  );
};
