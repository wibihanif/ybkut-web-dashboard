import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetCurrentStocks = (
  options?: UseQueryOptions<unknown, unknown, { currentStocks: number }, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['current-stocks'],
    async () => {
      const response = await api<{ currentStocks: number }>(axios.get('inventory/current-stocks'));

      return response;
    },
    options,
  );
};
