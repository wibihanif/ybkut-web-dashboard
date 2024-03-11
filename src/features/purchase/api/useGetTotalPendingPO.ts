import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalPendingPO {
  count: number;
}

export const useGetTotalPendingPO = (
  options?: UseQueryOptions<unknown, unknown, TotalPendingPO, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-po'],
    async () => {
      const response = await api<TotalPendingPO>(axios.get('purchase/total-pending-po'));

      return response;
    },
    options,
  );
};
