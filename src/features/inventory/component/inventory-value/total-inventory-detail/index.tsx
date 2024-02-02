import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import React, { useCallback, useState } from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { TotalInventoryDetailTable } from './TotalInventoryDetailTable';
import { Link, useSearchParams } from 'react-router-dom';
import { useDebouncedState } from '@mantine/hooks';
import { useGetTotalValuesDetail } from '~/features/inventory/api/useGetTotalValuesDetail';
import { SortOrder } from '~/types/pagination';
import { useTotalInventoryValuesSearchParams } from '~/features/inventory/hooks/useTotalInventoryValuesSearchParams';

const LIMIT_PER_PAGE = 10;

export const TotalInventoryDetail: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const initialPage = parseInt(searchParams.get('page') || '1');
  const initialSortBy = searchParams.get('sortBy') || 'productName';
  const initialSortOrder = searchParams.get('sortOrder') || SortOrder.ASC;

  const [page, setPage] = useState<number>(initialPage);
  const [searchValue, setSearchValue] = useDebouncedState(initialSearch, 300);

  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortOrder, setSortOrder] = useState(initialSortOrder as SortOrder);

  const { data: totalInventoryValuesDetail, isLoading: isLoadingTotalValuesDetail } =
    useGetTotalValuesDetail({
      page,
      search: searchValue ? searchValue : undefined,
      sortBy,
      sortOrder,
    });

  const totalPage = Math.ceil((totalInventoryValuesDetail?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  useTotalInventoryValuesSearchParams({
    debouncedSearched: searchValue,
    page,
    setSearchParams,
    sortBy,
    sortOrder,
  });

  return (
    <Box>
      <HeaderPage
        inputComponent={
          <Input
            defaultValue={searchValue}
            onChange={event => setSearchValue(event.target.value as string)}
            placeholder="Search here"
            icon={<IconSearch size={16} color="#3845a3" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see total inventory value detail."
        title="Total Inventory Value Detail"
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
        <TotalInventoryDetailTable
          page={page}
          setPage={setPage}
          totalInventoryValuesDetail={totalInventoryValuesDetail?.data || []}
          totalPage={totalPage}
          handleSort={handleSort}
          isLoadingTotalValuesDetail={isLoadingTotalValuesDetail}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </Paper>
    </Box>
  );
};
