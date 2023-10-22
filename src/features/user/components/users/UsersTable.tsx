import { Box, Flex, Loader, Pagination, ScrollArea, Stack, Table } from '@mantine/core';
import { ModifiedUser } from '../../types';
import { TableRow } from './TableRow';

interface UsersTableProps {
  users: ModifiedUser[];
  isLoadingUsers: boolean;
  page: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onNavigateToUserDetails: (userId: string) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  isLoadingUsers,
  page,
  setPage,
  totalPage,
  onNavigateToUserDetails,
}) => {
  const tableRows = users.map(user => {
    return (
      <TableRow
        userId={user.id}
        email={user.email}
        fullName={user.fullName}
        phoneNumber={user.phoneNumber}
        nik={user.nik}
        onNavigateToUserDetails={onNavigateToUserDetails}
      />
    );
  });

  return (
    <Stack>
      <Box py={30} component={ScrollArea}>
        <Table mb="lg" verticalSpacing="md" highlightOnHover>
          <thead style={{ backgroundColor: '#00C48F' }}>
            <tr>
              <th style={{ color: 'white' }}>Full Name</th>
              <th style={{ color: 'white' }}>Email</th>
              <th style={{ color: 'white' }}>Phone Number</th>
              <th style={{ color: 'white' }}>NIK</th>
              <th style={{ color: 'white' }}></th>
            </tr>
          </thead>
          {isLoadingUsers ? (
            <Flex justify="center" pt={50}>
              <Loader size="lg" />
            </Flex>
          ) : !users.length ? (
            <Flex>Data Not Found</Flex>
          ) : (
            <tbody>{tableRows}</tbody>
          )}
        </Table>
      </Box>
      <Pagination value={page} onChange={setPage} total={totalPage} sx={{ alignSelf: 'center' }} />
    </Stack>
  );
};
