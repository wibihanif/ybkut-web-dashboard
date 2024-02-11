import { Box, Text, createStyles } from '@mantine/core';
import { toRupiah } from '~/utils/format';

interface TableRowProps {
  purchaseOrderName: string;
  amountTotal: string;
  state: string;
  partnerName: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  amountTotal,
  partnerName,
  purchaseOrderName,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow} style={{ textAlign: 'left' }}>
      <td style={{ width: '455px' }}>
        <Text>{purchaseOrderName}</Text>
      </td>
      <td style={{ width: '455px' }}>{toRupiah(Number(amountTotal))}</td>
      <td style={{ width: '455px' }}>
        <Text>{state}</Text>
      </td>
      <td style={{ width: '455px' }}>{partnerName}</td>
    </Box>
  );
};
