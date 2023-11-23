import { Box, Text, createStyles } from '@mantine/core';
import { format } from 'date-fns';
import Barcode from 'react-barcode';

interface TableRowProps {
  date: Date;
  name: string;
  state: string;
  defaultCode: string;
  barcode: string;
  description: string;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  tableRowText: { fontSize: '12px' },
}));

export const TableRow: React.FC<TableRowProps> = ({
  barcode,
  date,
  defaultCode,
  description,
  name,
  state,
}) => {
  const { classes } = useStyles();

  const dateShown = format(date, 'dd/MM/yyy');

  return (
    <Box component="tr" className={classes.tableRow}>
      <td>
        <Text className={classes.tableRowText}>{dateShown}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{name}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{state}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{defaultCode}</Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>
          <Barcode value={barcode} height={20} width={1} fontSize={10} />
        </Text>
      </td>
      <td>
        <Text className={classes.tableRowText}>{description}</Text>
      </td>
    </Box>
  );
};
