import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { PendingTransferDetail } from '../types';

interface PendingTransferDetailQueries extends PaginationQueries {
  search: string;
  origin: string;
  state: string;
}

export const useGetPendingTransferDetail = (
  queries?: PendingTransferDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<PendingTransferDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pending-transfer-detail', queries],
    async () => {
      const response = await api<PageableResponse<PendingTransferDetail>>(
        axios.get('inventory/pending-transfer-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
