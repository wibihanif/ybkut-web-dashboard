import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  unit: string;
  current: number | string;
  thirtydays: number | string;
  sixtydays: number | string;
  ninetydays: number | string;
  abovedays: number | string;
  cp: number | string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const AccountTableRow: React.FC<ActivityEventTableRowProps> = ({
  unit,
  current,
  thirtydays,
  sixtydays,
  ninetydays,
  abovedays,
  cp,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{unit}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{current}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{thirtydays}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{sixtydays}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{ninetydays}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{abovedays}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{cp}</Text>
      </td>
    </Box>
  );
};
