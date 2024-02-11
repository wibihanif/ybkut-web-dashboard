import { Box, Input, Paper, ThemeIcon } from '@mantine/core';
import { IconSearch, IconArrowLeft } from '@tabler/icons-react';
import React, { useCallback, useState } from 'react';
import { HeaderPage } from '~/components/core/HeaderPage';
import { TotalPurcaseDetailTable } from './TotalPurchaseDetailTable';
import { Link, useSearchParams } from 'react-router-dom';
import { SortOrder } from '~/types/pagination';
import { useDebouncedState } from '@mantine/hooks';
import { useGetTotalPurchaseOrderDetail } from '~/features/purchase/api/useGetTotalPurchaseOrderDetail';
import { usePurchaseOrderDetailSearchParams } from '~/features/purchase/hooks/usePurchaseOrderDetailSearchParams';

const LIMIT_PER_PAGE = 10;

export const TotalPurchaseDetail: React.FC = () => {
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
    useGetTotalPurchaseOrderDetail({
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

  usePurchaseOrderDetailSearchParams({
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
        subTitle="This page is used to see total purchase order."
        title="Total Purchase Order"
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
        <TotalPurcaseDetailTable
          page={page}
          setPage={setPage}
          totalPurchaseOrdersDetail={totalPurchaseOrderDetail?.data || []}
          totalPage={totalPage}
          sortBy={sortBy}
          sortOrder={sortOrder}
          handleSort={handleSort}
          isLoadingPurchaseOrderDetail={isLoadingPurchaseOrderDetail}
        />
      </Paper>
    </Box>
  );
};
