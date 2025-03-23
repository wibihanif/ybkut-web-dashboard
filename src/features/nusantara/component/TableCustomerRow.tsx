import { createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface CurrentStockTableRowProps {
  batch: Date;
  median: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    backgroundColor: '#1E1E1E !important', // Paksa latar belakang hitam
    color: 'white', // Teks putih
    borderBottom: '1px solid white', // Garis putih antar baris
    ':hover': {
      backgroundColor: '#333333', // Warna saat hover
    },
  },
  tableCell: {
    padding: '10px', // Padding agar nyaman dilihat
  },
}));

export const TableRow: React.FC<CurrentStockTableRowProps> = ({ batch, median }) => {
  const { classes } = useStyles();
  const dateShown = format(batch, 'dd/MM/yyyy');

  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableCell}>{dateShown}</td>
      <td className={classes.tableCell}>{median}</td>
    </tr>
  );
};
