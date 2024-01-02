import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import { StatusBadge } from '~/components/core/StatusBadge';

interface TableRowProps {
  name: string;
  dateStart: Date;
  requestedBy: string;
  departmentName: string;
  item: string;
  state: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  name,
  dateStart,
  requestedBy,
  departmentName,
  item,
  state,
}) => {
  const { classes } = useStyles();

  const dateShown = format(dateStart, 'dd/MM/yyyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '260px' }}>{name}</td>
      <td style={{ width: '175px' }}>{dateShown}</td>
      <td style={{ width: '175px' }}>{requestedBy}</td>
      <td style={{ width: '260px' }}>{departmentName}</td>
      <td style={{ width: '265px' }}>{item}</td>
      <td style={{ width: '175px' }}>
        <StatusBadge state={state} />
      </td>
    </Box>
  );
};
