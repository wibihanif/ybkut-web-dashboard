import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  date: Date;
  product: string;
  quantity: string;
  unitMeasures: string;
  totalValue: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const TableRow: React.FC<ActivityEventTableRowProps> = ({
  date,
  product,
  quantity,
  totalValue,
  unitMeasures,
}) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{dateShown}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{product}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{quantity}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{unitMeasures}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{totalValue}</Text>
      </td>
    </Box>
  );
};
