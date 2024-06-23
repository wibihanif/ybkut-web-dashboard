import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface OpexPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface OpexPlan {
  plan_opex: number;
}

interface TransformedOpexPlan {
  planOpex: number;
}

export const useGetOpexPlan = (
  queries?: OpexPlanQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedOpexPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['opex-plan', queries],
    async () => {
      const response = await api<OpexPlan>(axios.get('accounting/opex-plan', { params: queries }));

      const transformedResponse: TransformedOpexPlan = {
        planOpex: response.plan_opex,
      };

      return transformedResponse;
    },
    options,
  );
};
