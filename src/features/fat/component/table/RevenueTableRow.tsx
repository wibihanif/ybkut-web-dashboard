import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  unit: string;
  lastMonth: number | string;
  plan: number | string;
  actual: number | string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const RevenueTableRow: React.FC<ActivityEventTableRowProps> = ({
  unit,
  lastMonth,
  plan,
  actual,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{unit}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{lastMonth}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{plan}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{actual}</Text>
      </td>
    </Box>
  );
};
