import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface PnlPerUnitQueries {
  startDate?: string;
  endDate?: string;
}

interface PnlPerUnit {
  unit: string;
  plan_pnl: number;
  actual_pnl: number;
  achievement: number;
}

interface TransformedPnlPerUnit {
  unit: string;
  planPnl: number;
  actualPnl: number;
  achievement: number;
}

export const useGetRevenueThisMonth = (
  queries: PnlPerUnitQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedPnlPerUnit[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['pnl-per-unit'],
    async () => {
      const response = await api<PnlPerUnit[]>(
        axios.get('accounting/pnl-per-unit', { params: queries }),
      );

      return response.map((item: PnlPerUnit) => ({
        unit: item.unit,
        planPnl: item.plan_pnl,
        actualPnl: item.actual_pnl,
        achievement: item.achievement,
      }));
    },
    options,
  );
};
