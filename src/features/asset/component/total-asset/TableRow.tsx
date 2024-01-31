import { Box, createStyles } from '@mantine/core';
import { StatusBadge } from '~/components/core/StatusBadge';
import { toRupiah } from '~/utils/format';

interface TableRowProps {
  name: string;
  partnerName: string;
  userCompany: string;
  amountTotal: number;
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
  partnerName,
  userCompany,
  amountTotal,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '260px' }}>{name}</td>
      <td style={{ width: '265px' }}>{partnerName}</td>
      <td style={{ width: '260px' }}>{userCompany}</td>
      <td style={{ width: '260px' }}>{toRupiah(amountTotal)}</td>
      <td style={{ width: '265px' }}>
        <StatusBadge state={state} />
      </td>
    </Box>
  );
};
