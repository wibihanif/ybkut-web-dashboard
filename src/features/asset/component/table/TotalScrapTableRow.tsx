import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface CurrentStockTableRowProps {
  assetName: string;
  firstDepreciationDate: Date;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<CurrentStockTableRowProps> = ({
  assetName,
  firstDepreciationDate,
}) => {
  const { classes } = useStyles();

  const dateShown = format(firstDepreciationDate, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{assetName}</td>
      <td>{dateShown}</td>
    </Box>
  );
};
