import { Box, Text, createStyles } from '@mantine/core';

interface ActivityEventTableRowProps {
  unit: string;
  plan: number | string;
  actual: number | string;
  achievement: number | string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const RevenueYtdTableRow: React.FC<ActivityEventTableRowProps> = ({
  unit,
  plan,
  actual,
  achievement,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{unit}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{plan}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{actual}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{achievement}</Text>
      </td>
    </Box>
  );
};
