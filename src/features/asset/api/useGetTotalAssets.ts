import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalAssets {
  totalAssets: number;
}

export const useGetTotalAssets = (
  options?: UseQueryOptions<unknown, unknown, TotalAssets, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-asset'],
    async () => {
      const response = await api<TotalAssets>(axios.get('assets/total-asset'));

      return response;
    },
    options,
  );
};
