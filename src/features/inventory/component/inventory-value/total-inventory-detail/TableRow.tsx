import { Box, createStyles } from '@mantine/core';

interface TableRowProps {
  date: Date;
  productName: string;
  quantity: string;
  uomName: string;
  value: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  date,
  productName,
  quantity,
  uomName,
  value,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '276px' }}>{date.toDateString()}</td>
      <td style={{ width: '276px' }}>{productName}</td>
      <td style={{ width: '276px' }}>{quantity}</td>
      <td style={{ width: '276px' }}>{uomName}</td>
      <td style={{ width: '276px' }}>{value}</td>
    </Box>
  );
};
