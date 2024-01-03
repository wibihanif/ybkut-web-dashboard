import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { PendingReceiptDetail } from '../types';

interface PendingReceiptDetailQueries extends PaginationQueries {
  search: string;
  origin: string;
  state: string;
}

export const useGetPendingReceiptDetail = (
  queries?: PendingReceiptDetailQueries,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<PendingReceiptDetail>, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pending-receipt-detail', queries],
    async () => {
      const response = await api<PageableResponse<PendingReceiptDetail>>(
        axios.get('inventory/pending-receipt-detail', { params: queries }),
      );

      return response;
    },
    options,
  );
};
