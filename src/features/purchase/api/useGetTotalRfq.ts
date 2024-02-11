import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalRfq {
  sum: number;
}

export const useGetTotalRfq = (options?: UseQueryOptions<unknown, unknown, TotalRfq, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-rfq'],
    async () => {
      const response = await api<TotalRfq>(axios.get('purchase/total-rfq'));

      return response;
    },
    options,
  );
};
