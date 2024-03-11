import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface AverageOrderValue {
  avg: string;
  tahun: Date;
}

export const useGetAverageOrderValue = (
  options?: UseQueryOptions<unknown, unknown, AverageOrderValue[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['average-order-value'],
    async () => {
      const response = await api<AverageOrderValue[]>(axios.get('purchase/year-average-value'));

      return response;
    },
    options,
  );
};
