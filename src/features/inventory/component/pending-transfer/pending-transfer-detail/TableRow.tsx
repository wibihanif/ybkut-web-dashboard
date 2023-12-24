import { Box, createStyles } from '@mantine/core';

interface TableRowProps {
  name: string;
  locationName: string;
  partnerName: string;
  origin: string;
  state: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  locationName,
  name,
  origin,
  partnerName,
  state,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{name}</td>
      <td>{locationName}</td>
      <td>{partnerName}</td>
      <td>{origin}</td>
      <td>{state}</td>
    </Box>
  );
};
