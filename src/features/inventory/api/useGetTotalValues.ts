import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalValues {
  totalValues: number;
}

export const useGetTotalValues = (
  options?: UseQueryOptions<unknown, unknown, TotalValues, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-values'],
    async () => {
      const response = await api<TotalValues>(axios.get('inventory/total-values'));

      return response;
    },
    options,
  );
};
