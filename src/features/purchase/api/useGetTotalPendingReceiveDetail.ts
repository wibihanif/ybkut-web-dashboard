import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalPendingReceiveDetail } from '../types';

interface TotalPendingReceiveDetailQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalPendingReceiveDetail = (
  queries?: TotalPendingReceiveDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalPendingReceiveDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-receive-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalPendingReceiveDetail>>(
        axios.get('purchase/total-pending-receive-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
