import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface RevenueYtd {
  unit: string;
  achievement: number;
  plan: number;
  actual: number;
}

export const useGetRevenueYtd = (
  options?: UseQueryOptions<unknown, unknown, RevenueYtd[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['revenue-ytd'],
    async () => {
      const response = await api<RevenueYtd[]>(axios.get('accounting/revenue-ytd'));

      return response;
    },
    options,
  );
};
