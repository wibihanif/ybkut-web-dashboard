import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface PendingReceipts {
  pendingReceipts: number;
}

export const useGetPendingTransfers = (
  options?: UseQueryOptions<unknown, unknown, PendingReceipts, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pending-receipts'],
    async () => {
      const response = await api<PendingReceipts>(axios.get('inventory/pending-receipts'));

      return response;
    },
    options,
  );
};
