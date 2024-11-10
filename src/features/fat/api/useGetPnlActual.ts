import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface PnlPlanQueries {
  startDate?: string;
  endDate?: string;
}

interface PnlActual {
  actual_pnl: number;
}

interface TransformedPnlPlan {
  actualPnl: number;
}

export const useGetPnlActual = (
  queries?: PnlPlanQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedPnlPlan, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pnl-actual', queries],
    async () => {
      const response = await api<PnlActual>(
        axios.get('accounting/pnl-actual', { params: queries }),
      );

      const transformedResponse: TransformedPnlPlan = {
        actualPnl: response.actual_pnl,
      };

      return transformedResponse;
    },
    options,
  );
};
