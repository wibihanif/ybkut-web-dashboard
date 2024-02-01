import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { CurrentStock } from '../types';

interface CurrentStocksQueries extends PaginationQueries {
  search?: string;
}

export const useGetCurrentStocksDetail = (
  queries?: CurrentStocksQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<CurrentStock>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['current-stocks-detail', queries],
    async () => {
      const response = await api<PageableResponse<CurrentStock>>(
        axios.get('inventory/current-stocks-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
