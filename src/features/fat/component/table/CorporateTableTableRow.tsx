import { Box, Text, createStyles } from '@mantine/core';

interface ActivityEventTableRowProps {
  unit: string;
  plan: number | string;
  actual: number | string;
  gap: number | string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const CorporateTableTableRow: React.FC<ActivityEventTableRowProps> = ({
  unit,
  plan,
  actual,
  gap,
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
        <Text className={classes.tableRowText}>{gap}</Text>
      </td>
    </Box>
  );
};
