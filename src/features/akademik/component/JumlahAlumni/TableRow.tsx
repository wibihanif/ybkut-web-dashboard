import { Box, createStyles } from '@mantine/core';
import { format } from 'date-fns';

interface TableRowProps {
  name: string;
  assetCode: string;
  branchName: string;
  tahunPerolehan: string;
  assignDate: Date;
  categoryName: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  name,
  assetCode,
  branchName,
  tahunPerolehan,
  assignDate,
  categoryName,
}) => {
  const { classes } = useStyles();

  const dateShown = format(assignDate, 'dd/MM/yyyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td style={{ width: '260px' }}>{name}</td>
      <td style={{ width: '175px' }}>{assetCode}</td>
      <td style={{ width: '175px' }}>{branchName}</td>
      <td style={{ width: '260px' }}>{tahunPerolehan}</td>
      <td style={{ width: '265px' }}>{dateShown}</td>
      <td style={{ width: '175px' }}>{categoryName}</td>
    </Box>
  );
};
