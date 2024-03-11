import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalPendingReceive {
  count: number;
}

export const useGetTotalPendingReceive = (
  options?: UseQueryOptions<unknown, unknown, TotalPendingReceive, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-receive'],
    async () => {
      const response = await api<TotalPendingReceive>(axios.get('purchase/total-pending-receive'));

      return response;
    },
    options,
  );
};
