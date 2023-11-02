import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface SiswaSelesaiStudiTableRowProps {
  nama: string;
  umur: number;
  angkatan: Date;
  lamaStudi: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<SiswaSelesaiStudiTableRowProps> = ({
  nama,
  umur,
  angkatan,
  lamaStudi,
}) => {
  const { classes } = useStyles();

  const dateShown = format(angkatan, 'yyyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{dateShown}</td>
      <td>{lamaStudi}</td>
    </Box>
  );
};
