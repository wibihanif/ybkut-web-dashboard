import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalValuesDetail } from '../types';

interface TotalValuesDetailQueries extends PaginationQueries {
  search: string;
}

export const useGetTotalValuesDetail = (
  queries?: TotalValuesDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalValuesDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-values-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalValuesDetail>>(
        axios.get('inventory/total-values-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
