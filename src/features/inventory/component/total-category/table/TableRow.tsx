import { Box, Text, createStyles } from '@mantine/core';
// import { format } from 'date-fns';

interface ActivityEventTableRowProps {
  name: string;
  initialLocation: string;
  locationDestination: string;
  partner: string;
  origin: string;
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
  initialLocation,
  locationDestination,
  name,
  origin,
  partner,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{name}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{initialLocation}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{locationDestination}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{partner}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{origin}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{state}</Text>
      </td>
    </Box>
  );
};
