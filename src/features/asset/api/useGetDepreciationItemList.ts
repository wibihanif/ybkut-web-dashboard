import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { DepreciationItem } from '../types';

interface DepreciationItemQueries extends PaginationQueries {
  search?: string;
}

export const useGetDepreciationItemList = (
  queries?: DepreciationItemQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<DepreciationItem>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['depreciation-item-list', queries],
    async () => {
      const response = await api<PageableResponse<DepreciationItem>>(
        axios.get('assets/list-item-depresiation', { params: queries }),
      );

      return response;
    },
    options,
  );
};
