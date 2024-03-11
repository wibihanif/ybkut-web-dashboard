import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalPendingPR {
  count: number;
}

export const useGetTotalPendingPR = (
  options?: UseQueryOptions<unknown, unknown, TotalPendingPR, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-pending-pr'],
    async () => {
      const response = await api<TotalPendingPR>(axios.get('purchase/total-pending-pr'));

      return response;
    },
    options,
  );
};
