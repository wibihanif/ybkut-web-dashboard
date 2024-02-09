import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalScrapProduct {
  totalScrapProduct: number;
}

export const useGetTotalScrapProduct = (
  options?: UseQueryOptions<unknown, unknown, TotalScrapProduct, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-scrap-product'],
    async () => {
      const response = await api<TotalScrapProduct>(axios.get('assets/scrap-product'));

      return response;
    },
    options,
  );
};
