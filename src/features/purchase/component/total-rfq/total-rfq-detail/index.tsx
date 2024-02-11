import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconArrowLeft, IconSearch } from '@tabler/icons-react';
import React, { useCallback, useState } from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { TotalRFQDetailTable } from './TotalRfqDetailTable';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetTotalRfqDetail } from '~/features/purchase/api/useGetTotalRfqDetail';
import { SortOrder } from '~/types/pagination';
import { useDebouncedState } from '@mantine/hooks';
import { useTotalRfqDetailSearchParams } from '~/features/purchase/hooks/useTotalRfqDetailSearchParams';

const LIMIT_PER_PAGE = 10;

export const TotalRFQDetail: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const initialPage = parseInt(searchParams.get('page') || '1');
  const initialSortBy = searchParams.get('sortBy') || 'purchaseOrderName';
  const initialSortOrder = searchParams.get('sortOrder') || SortOrder.ASC;

  const [page, setPage] = useState<number>(initialPage);
  const [searchValue, setSearchValue] = useDebouncedState(initialSearch, 300);

  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortOrder, setSortOrder] = useState(initialSortOrder as SortOrder);

  const { data: totalPurchaseOrderDetail, isLoading: isLoadingPurchaseOrderDetail } =
    useGetTotalRfqDetail({
      page,
      search: searchValue ? searchValue : undefined,
      sortBy,
      sortOrder,
    });

  const totalPage = Math.ceil((totalPurchaseOrderDetail?.meta?.total as number) / LIMIT_PER_PAGE);

  const handleSort = useCallback((sortValue: string, orderValue: SortOrder) => {
    setSortBy(sortValue);
    setSortOrder(orderValue);
  }, []);

  useTotalRfqDetailSearchParams({
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
            placeholder="Search here"
            defaultValue={searchValue}
            onChange={event => setSearchValue(event.target.value as string)}
            icon={<IconSearch size={16} color="#3845a3" />}
            radius={10}
            sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 10 }}
          />
        }
        subTitle="This page is used to see total RFQ."
        title="Total RFQ"
        icon={
          <Link to="/purchase">
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
        <TotalRFQDetailTable
          handleSort={handleSort}
          isLoadingRfqDetail={isLoadingPurchaseOrderDetail}
          page={page}
          setPage={setPage}
          sortBy={sortBy}
          sortOrder={sortOrder}
          totalPage={totalPage}
          totalRfqDetail={totalPurchaseOrderDetail?.data || []}
        />
      </Paper>
    </Box>
  );
};
