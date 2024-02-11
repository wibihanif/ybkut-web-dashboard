import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { TotalApproveDetail } from '../types';

interface TotalApproveQueries extends PaginationQueries {
  search?: string;
  state?: string;
}

export const useGetTotalApproveDetail = (
  queries?: TotalApproveQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<TotalApproveDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-approve-detail', queries],
    async () => {
      const response = await api<PageableResponse<TotalApproveDetail>>(
        axios.get('purchase/total-approve-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
