import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  name: string;
  dateDone: Date;
  productName: string;
  scrapQuantity: string;
  measure: string;
  location: string;
  state: string;
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
  dateDone,
  location,
  measure,
  name,
  productName,
  scrapQuantity,
  state,
}) => {
  const { classes } = useStyles();

  const dateShown = format(dateDone, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{name}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{dateShown}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{productName}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{scrapQuantity}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{measure}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{location}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{state}</Text>
      </td>
    </Box>
  );
};
