import { Box, Text, createStyles } from '@mantine/core';

interface ActivityEventTableRowProps {
  unit: string;
  cost: number | string;
  gp: number | string;
  gpm: number | string;
  opex: number | string;
  op: number | string;
  opm: number | string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const ProfitYtdTableRow: React.FC<ActivityEventTableRowProps> = ({
  unit,
  cost,
  gp,
  gpm,
  opex,
  op,
  opm,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{unit}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{cost}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{gp}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{gpm}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{opex}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{op}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{opm}</Text>
      </td>
    </Box>
  );
};
