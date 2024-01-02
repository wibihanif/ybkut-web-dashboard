import { Box, createStyles } from '@mantine/core';
import { StatusBadge } from '~/components/core/StatusBadge';

interface TableRowProps {
  name: string;
  locDesc: string;
  partnerName: string;
  fiscalPosName: string;
  origin: string;
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
  locDesc,
  partnerName,
  fiscalPosName,
  origin,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '260px' }}>{name}</td>
      <td style={{ width: '175px' }}>{locDesc}</td>
      <td style={{ width: '175px' }}>{partnerName}</td>
      <td style={{ width: '260px' }}>{fiscalPosName}</td>
      <td style={{ width: '265px' }}>{origin}</td>
      <td style={{ width: '175px' }}>
        <StatusBadge state={state} />
      </td>
    </Box>
  );
};
