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
      <td style={{ width: '276px' }}>{name}</td>
      <td style={{ width: '276px' }}>{locationName}</td>
      <td style={{ width: '276px' }}>{partnerName}</td>
      <td style={{ width: '276px' }}>{origin}</td>
      <td style={{ width: '276px' }}>{state}</td>
    </Box>
  );
};
