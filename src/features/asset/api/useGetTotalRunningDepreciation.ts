import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalRunningDepreciation {
  totalRunningDepreciation: number;
}

export const useGetTotalRunningDepreciation = (
  options?: UseQueryOptions<unknown, unknown, TotalRunningDepreciation, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['running-depreciation'],
    async () => {
      const response = await api<TotalRunningDepreciation>(
        axios.get('assets/running-depreciation'),
      );

      return response;
    },
    options,
  );
};
