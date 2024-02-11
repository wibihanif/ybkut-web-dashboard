import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalPurchaseOrders {
  sum: number;
}

export const useGetTotalPurchaseOrders = (
  options?: UseQueryOptions<unknown, unknown, TotalPurchaseOrders, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-purchase-order'],
    async () => {
      const response = await api<TotalPurchaseOrders>(axios.get('purchase/total-amount-orders'));

      return response;
    },
    options,
  );
};
