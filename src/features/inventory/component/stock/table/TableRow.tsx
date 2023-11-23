import { Box, Text, createStyles } from '@mantine/core';

interface TableRowProps {
  defaultCode: string;
  name: string;
  barcode: string;
  sum: number;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const TableRow: React.FC<TableRowProps> = ({ barcode, defaultCode, name, sum }) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{name}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{defaultCode}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{barcode}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{sum}</Text>
      </td>
    </Box>
  );
};
