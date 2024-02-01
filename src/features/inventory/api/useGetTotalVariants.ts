import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalVariant } from '../types';

interface TotalVariantsQueries extends PaginationQueries {
  search?: string;
}

export const useGetTotalVariants = (
  queries?: TotalVariantsQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalVariant>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-variant', queries],
    async () => {
      const response = await api<PageableResponse<TotalVariant>>(
        axios.get('inventory/total-variants', { params: queries }),
      );

      return response;
    },
    options,
  );
};
