import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { StockOpname } from '../types';

interface StocksOpnameQueries extends PaginationQueries {
  search?: string;
}

export const useGetStocksOpname = (
  queries?: StocksOpnameQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<StockOpname>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['stock-opname', queries],
    async () => {
      const response = await api<PageableResponse<StockOpname>>(
        axios.get('inventory/stock-opname', { params: queries }),
      );

      return response;
    },
    options,
  );
};
