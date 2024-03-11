import { Box, createStyles } from '@mantine/core';

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
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '455px' }}>{purchaseOrderName}</td>
      <td style={{ width: '455px' }}>{amountTotal}</td>
      <td style={{ width: '455px' }}>{partnerName}</td>
      <td style={{ width: '455px' }}>{state}</td>
    </Box>
  );
};
