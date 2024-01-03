import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalProductDetail } from '../types';

interface TotalProductsDetailQueries extends PaginationQueries {
  search: string;
}

export const useGetTotalProductsDetail = (
  queries?: TotalProductsDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalProductDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-products-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalProductDetail>>(
        axios.get('inventory/total-products-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
