import { Box, Text, createStyles } from '@mantine/core';

interface ActivityEventTableRowProps {
  month: string;
  qty: number;
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

export const TableRow: React.FC<ActivityEventTableRowProps> = ({ month, qty, state }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{month}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{qty}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{state}</Text>
      </td>
    </Box>
  );
};
