import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalProducts {
  totalProducts: number;
}

export const useGetTotalProducts = (
  options?: UseQueryOptions<unknown, unknown, TotalProducts, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-products'],
    async () => {
      const response = await api<TotalProducts>(axios.get('inventory/total-products'));

      return response;
    },
    options,
  );
};
