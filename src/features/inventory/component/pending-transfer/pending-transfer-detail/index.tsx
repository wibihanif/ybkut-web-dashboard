import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { PendingTransferDetailTable } from './PendingTransferDetailTable';
import { Link } from 'react-router-dom';
import { useDebouncedState } from '@mantine/hooks';
import { useGetPendingTransferDetail } from '~/features/inventory/api/useGetPendingTransferDetail';

const LIMIT_PER_PAGE = 10;

export const PendingTransferDetail: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const { data: pendingTransfersDetail } = useGetPendingTransferDetail({
    page,
    search: searchValue,
  });

  const totalPage = Math.ceil((pendingTransfersDetail?.meta?.total as number) / LIMIT_PER_PAGE);

  return (
    <Box>
      <HeaderPage
        inputComponent={
          <Input
            placeholder="Search here"
            onChange={event => setSearchValue(event.target.value as string)}
            icon={<IconSearch size={16} color="#3845a3" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see pending transfer."
        title="Pending Transfer Detail"
        icon={
          <Link to="/inventory">
            <Box
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}>
              <ThemeIcon variant="light" size="xl" color="#3845a3" my={15}>
                <IconArrowLeft color="white" />
              </ThemeIcon>
            </Box>
          </Link>
        }
      />
      <Paper
        style={{
          marginTop: 20,
          borderRadius: 10,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: 20,
          transition: 'transform 0.3s ease-in-out',
          height: '100%',
        }}>
        <PendingTransferDetailTable
          page={page}
          pendingTransafersDetail={pendingTransfersDetail?.data || []}
          setPage={setPage}
          totalPage={totalPage}
        />
      </Paper>
    </Box>
  );
};
