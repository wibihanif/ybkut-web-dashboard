import { Button, Grid, Paper } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedValue } from '@mantine/hooks';
import { useUsersSearchParams } from '../../hooks/useUsersSearchParams';
import { UsersTable } from './UsersTable';
import { SearchBar } from '~/components/core/DataInput';
import { useGetUsersQuery } from '../../api/useGetUsersQuery';

interface UsersProps {
  onNavigateToUserDetails: (userId: string) => void;
}

export const Users: React.FC<UsersProps> = ({ onNavigateToUserDetails }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const LIMIT_PER_PAGE = 10;

  const initialPage = parseInt(searchParams.get('page') || '1');
  const initialSearchedText = searchParams.get('search') || '';

  const [page, setPage] = useState<number>(initialPage);

  const [searchedText, setSearchedText] = useState<string>(initialSearchedText);
  const [debouncedSearchedText] = useDebouncedValue<string>(searchedText, 500);

  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery({
    limit: LIMIT_PER_PAGE,
    page,
    search: debouncedSearchedText,
  });

  const totalPage = Math.ceil((users?.meta?.total as number) / LIMIT_PER_PAGE);

  const onResetFilter = () => {
    setPage(1);
    setSearchedText('');
  };

  useUsersSearchParams({
    page,
    setSearchParams,
    debouncedSearchedText,
  });

  return (
    <Paper p="lg">
      <Grid align="flex-end">
        <Grid.Col span={4}>
          <SearchBar
            value={searchedText}
            onChange={event => setSearchedText(event.currentTarget.value)}
            placeholder="ex : johndoe@mail.com"
            label="Search by user email :"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Button leftIcon={<IconRefresh size="1rem" />} onClick={onResetFilter}>
            Reset Filter
          </Button>
        </Grid.Col>
      </Grid>
      <UsersTable
        users={users?.data || []}
        isLoadingUsers={isLoadingUsers}
        onNavigateToUserDetails={onNavigateToUserDetails}
        page={page}
        setPage={setPage}
        totalPage={totalPage}
      />
    </Paper>
  );
};
