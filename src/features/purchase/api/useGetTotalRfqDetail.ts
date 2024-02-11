import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalRfqDetail } from '../types';

interface TotalRfqDetailQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalRfqDetail = (
  queries?: TotalRfqDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalRfqDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-rfq-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalRfqDetail>>(
        axios.get('purchase/total-rfq-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
