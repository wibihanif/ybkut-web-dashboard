import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import { toRupiah } from '~/utils/format';

interface VariantTotalTableRowProps {
  assetName: string;
  bookValue: number;
  firstDepreciationDate: Date;
  monthsPeriod: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<VariantTotalTableRowProps> = ({
  assetName,
  bookValue,
  firstDepreciationDate,
  monthsPeriod,
}) => {
  const { classes } = useStyles();

  const dateShown = format(firstDepreciationDate, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '200px' }}>{assetName}</td>
      <td style={{ width: '200px' }}>{toRupiah(bookValue)}</td>
      <td style={{ width: '200px' }}>{dateShown}</td>
      <td style={{ width: '200px' }}>{monthsPeriod}</td>
    </Box>
  );
};
