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
      <td>{date.toDateString()}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{uomName}</td>
      <td>{value}</td>
    </Box>
  );
};
