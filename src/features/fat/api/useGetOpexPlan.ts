import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface OpexPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface OpexPlan {
  plan: number;
}

export const useGetOpexPlan = (
  queries?: OpexPlanQueries,
  options?: UseQueryOptions<unknown, unknown, OpexPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['revenue-plan', queries],
    async () => {
      const response = await api<OpexPlan>(
        axios.get('accounting/revenue-plan', { params: queries }),
      );

      return response;
    },
    options,
  );
};
