import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface OprPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface OprPlan {
  plan_opr_profit: number;
}

interface TransformedOprPlan {
  planOprProfit: number;
}

export const useGetOperationalProfitPlan = (
  queries?: OprPlanQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedOprPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['opr-plan', queries],
    async () => {
      const response = await api<OprPlan>(axios.get('accounting/opr-plan', { params: queries }));

      const transformedResponse: TransformedOprPlan = {
        planOprProfit: response.plan_opr_profit,
      };

      return transformedResponse;
    },
    options,
  );
};
