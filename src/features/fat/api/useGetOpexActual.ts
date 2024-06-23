import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface OpexPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface OpexPlan {
  opex: number;
}

export const useGetOpexActual = (
  queries?: OpexPlanQueries,
  options?: UseQueryOptions<unknown, unknown, OpexPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['opex-actual', queries],
    async () => {
      const response = await api<OpexPlan>(
        axios.get('accounting/opex-actual', { params: queries }),
      );

      return response;
    },
    options,
  );
};
