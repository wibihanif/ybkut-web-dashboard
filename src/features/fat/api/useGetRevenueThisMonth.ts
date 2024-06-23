import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface RevenueThisMonth {
  unit: string;
  last_month: number;
  plan: number;
  actual: number;
}

interface RevenueThisMonthTransformed {
  unit: string;
  lastMonth: number;
  plan: number;
  actual: number;
}

export const useGetRevenueThisMonth = (
  options?: UseQueryOptions<unknown, unknown, RevenueThisMonthTransformed[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['revenue-this-month'],
    async () => {
      const response = await api<RevenueThisMonth[]>(axios.get('accounting/revenue-per-unit'));

      return response.map((item: RevenueThisMonth) => ({
        unit: item.unit,
        lastMonth: item.last_month,
        plan: item.plan,
        actual: item.actual,
      }));
    },
    options,
  );
};
