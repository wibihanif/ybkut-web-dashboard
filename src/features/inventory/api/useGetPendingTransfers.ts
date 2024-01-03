import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface PendingTransfers {
  pendingTransfers: number;
}

export const useGetPendingTransfers = (
  options?: UseQueryOptions<unknown, unknown, PendingTransfers, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pending-transfers'],
    async () => {
      const response = await api<PendingTransfers>(axios.get('inventory/pending-transfers'));

      return response;
    },
    options,
  );
};
