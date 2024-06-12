import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface RevenueActualQueries {
  startDate?: string;
  endDate?: string;
}

interface RevenueActual {
  revenue: number;
}

export const useGetRevenueActual = (
  queries?: RevenueActualQueries,
  options?: UseQueryOptions<unknown, unknown, RevenueActual, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['revenue-actual', queries],
    async () => {
      const response = await api<RevenueActual>(
        axios.get('accounting/revenue-actual', { params: queries }),
      );

      return response;
    },
    options,
  );
};
