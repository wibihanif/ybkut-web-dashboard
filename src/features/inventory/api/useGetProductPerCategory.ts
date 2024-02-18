import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface ProductPerCategory {
  count: string;
  type: string;
}

export const useGetProductPerCategory = (
  options?: UseQueryOptions<unknown, unknown, ProductPerCategory[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['product-per-category'],
    async () => {
      const response = await api<ProductPerCategory>(axios.get('inventory/product-per-category'));

      return response;
    },
    options,
  );
};
