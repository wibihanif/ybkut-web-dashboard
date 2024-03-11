import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalPendingPRDetail } from '../types';

interface TotalPendingPRQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalPendingPRDetail = (
  queries?: TotalPendingPRQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalPendingPRDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-pr-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalPendingPRDetail>>(
        axios.get('purchase/total-pending-pr-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
