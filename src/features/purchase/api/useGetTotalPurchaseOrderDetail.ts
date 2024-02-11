import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalPurchaseOrderDetail } from '../types';

interface TotalPurchaseOrderDetailQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalPurchaseOrderDetail = (
  queries?: TotalPurchaseOrderDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalPurchaseOrderDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-amount-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalPurchaseOrderDetail>>(
        axios.get('purchase/total-amount-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
