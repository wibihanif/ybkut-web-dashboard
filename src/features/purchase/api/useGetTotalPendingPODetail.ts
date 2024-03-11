import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalPendingPODetail } from '../types';

interface TotalPendingPOQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalPendingPODetail = (
  queries?: TotalPendingPOQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalPendingPODetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-po-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalPendingPODetail>>(
        axios.get('purchase/total-pending-po-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
