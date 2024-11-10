import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface PnlPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface PnlPlan {
  plan_pnl: number;
}

interface TransformedPnlPlan {
  planPnl: number;
}

export const useGetPnlPlan = (
  queries?: PnlPlanQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedPnlPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pnl-plan', queries],
    async () => {
      const response = await api<PnlPlan>(axios.get('accounting/pnl-plan', { params: queries }));

      const transformedResponse: TransformedPnlPlan = {
        planPnl: response.plan_pnl,
      };

      return transformedResponse;
    },
    options,
  );
};
