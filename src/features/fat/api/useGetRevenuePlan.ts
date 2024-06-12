import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface RevenuePlanQueries {
  startDate?: string;
  endDate?: string;
}

interface RevenuePlan {
  plan: number;
}

export const useGetRevenuePlan = (
  queries?: RevenuePlanQueries,
  options?: UseQueryOptions<unknown, unknown, RevenuePlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['revenue-plan', queries],
    async () => {
      const response = await api<RevenuePlan>(
        axios.get('accounting/revenue-plan', { params: queries }),
      );

      return response;
    },
    options,
  );
};
