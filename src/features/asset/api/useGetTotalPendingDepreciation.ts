import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalPendingDepreciation {
  totalPendingDepreciation: number;
}

export const useGetTotalPendingDepreciation = (
  options?: UseQueryOptions<unknown, unknown, TotalPendingDepreciation, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pending-depreciation'],
    async () => {
      const response = await api<TotalPendingDepreciation>(
        axios.get('assets/pending-depresiation'),
      );

      return response;
    },
    options,
  );
};
