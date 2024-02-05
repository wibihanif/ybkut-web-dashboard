import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { ScrapProduct } from '../types';

interface ScrapProductsQueries extends PaginationQueries {
  search?: string;
}

export const useGetScrapProductList = (
  queries?: ScrapProductsQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<ScrapProduct>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['scrap-product-list', queries],
    async () => {
      const response = await api<PageableResponse<ScrapProduct>>(
        axios.get('assets/scrap-product-list', { params: queries }),
      );

      return response;
    },
    options,
  );
};
