import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface NominalOrderAsset {
  name: string;
  count: string;
}

export const useGetNominalOrderAsset = (
  options?: UseQueryOptions<unknown, unknown, NominalOrderAsset[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['nominal-order-asset'],
    async () => {
      const response = await api<NominalOrderAsset[]>(axios.get('purchase/nominal-order-asset'));

      return response;
    },
    options,
  );
};
