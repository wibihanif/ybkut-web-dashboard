import { Box, createStyles } from '@mantine/core';
import Barcode from 'react-barcode';

interface StockOpnameTableRowProps {
  productName: string;
  defaultCode: string;
  barcode: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<StockOpnameTableRowProps> = ({
  productName,
  barcode,
  defaultCode,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{productName}</td>
      <td>{defaultCode}</td>
      <td>
        <Barcode value={barcode} height={20} width={1} fontSize={15} />
      </td>
    </Box>
  );
};
