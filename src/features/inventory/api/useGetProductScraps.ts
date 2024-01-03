import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { ProductScraps } from '../types';

interface ProductScrapsQueries extends PaginationQueries {
  search: string;
}

export const useGetProductScraps = (
  queries?: ProductScrapsQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<ProductScraps>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['product-scraps', queries],
    async () => {
      const response = await api<PageableResponse<ProductScraps>>(
        axios.get('inventory/product-scraps', { params: queries }),
      );

      return response;
    },
    options,
  );
};
