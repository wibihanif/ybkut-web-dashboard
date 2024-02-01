import { Box, createStyles, Text } from '@mantine/core';
import Barcode from 'react-barcode';

interface TableRowProps {
  productName: string;
  defaultCode: string | null;
  barcode: string | null;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({ productName, barcode, defaultCode }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow} style={{ textAlign: 'left' }}>
      <td style={{ width: '455px' }}>
        <Text>{productName}</Text>
      </td>
      <td style={{ width: '455px' }}>{defaultCode}</td>
      <td style={{ width: '469px' }}>
        <Barcode value={barcode as string} height={20} width={1} fontSize={10} />
      </td>
    </Box>
  );
};
