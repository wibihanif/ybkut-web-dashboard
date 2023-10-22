import { Box, Flex, Text, createStyles } from '@mantine/core';
import { IconCircleArrowUpRight } from '@tabler/icons-react';

interface TableRowProps {
  userId: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  nik: string;
  onNavigateToUserDetails: (userId: string) => void;
}

const useStyles = createStyles(() => ({
  tableRow: {
    ':hover': {
      cursor: 'pointer',
    },
  },
}));

export const TableRow: React.FC<TableRowProps> = ({
  userId,
  email,
  fullName,
  phoneNumber,
  nik,
  onNavigateToUserDetails,
}) => {
  const { classes } = useStyles();

  return (
    <Box component="tr" key={userId}>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{nik}</td>
      <td>
        <Flex gap="sm" className={classes.tableRow} onClick={() => onNavigateToUserDetails(userId)}>
          <Text color="green">Details</Text>
          <IconCircleArrowUpRight color="green" />
        </Flex>
      </td>
    </Box>
  );
};
