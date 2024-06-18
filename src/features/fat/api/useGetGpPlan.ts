import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface GrossProfitQueries {
  startDate?: string;
  endDate?: string;
}

interface GrossProfit {
  plan_gp: number;
}

interface TransformedGrossProfit {
  planGp: number;
}

export const useGetGpPlan = (
  queries?: GrossProfitQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedGrossProfit, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['gross-profit-plan', queries],
    async () => {
      const response = await api<GrossProfit>(axios.get('accounting/gp-plan', { params: queries }));

      const transformedResponse: TransformedGrossProfit = {
        planGp: response.plan_gp,
      };

      return transformedResponse;
    },
    options,
  );
};
