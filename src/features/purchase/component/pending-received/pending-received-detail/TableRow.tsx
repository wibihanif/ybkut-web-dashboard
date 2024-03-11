import { Box, createStyles } from '@mantine/core';
interface TableRowProps {
  name: string;
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

export const TableRow: React.FC<TableRowProps> = ({ name, origin, state }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{name}</td>
      <td>{origin}</td>
      <td>{state}</td>
    </Box>
  );
};
