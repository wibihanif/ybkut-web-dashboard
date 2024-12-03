import { Box, createStyles } from '@mantine/core';

interface TableRowProps {
  name: string;
  assetCode: string;
  branchName: string;
  tahunPerolehan: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
    display: 'grid',
    gridTemplateColumns: '300px 260px 260px 260px', // Set fixed width for columns
    width: '100%',
  },
  tableCell: {
    padding: '8px 16px', // Consistent padding for cells
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', // Prevent wrapping
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  name,
  assetCode,
  branchName,
  tahunPerolehan,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <Box component="td" className={classes.tableCell}>
        {name}
      </Box>
      <Box component="td" className={classes.tableCell}>
        {assetCode}
      </Box>
      <Box component="td" className={classes.tableCell}>
        {branchName}
      </Box>
      <Box component="td" className={classes.tableCell}>
        {tahunPerolehan}
      </Box>
    </Box>
  );
};
