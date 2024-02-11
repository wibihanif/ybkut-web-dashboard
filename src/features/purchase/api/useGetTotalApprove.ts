import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalApprove {
  sum: number;
}

export const useGetTotalApprove = (
  options?: UseQueryOptions<unknown, unknown, TotalApprove, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-approve'],
    async () => {
      const response = await api<TotalApprove>(axios.get('purchase/approve'));

      return response;
    },
    options,
  );
};
