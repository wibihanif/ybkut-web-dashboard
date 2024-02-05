import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalEquipment {
  totalEquipment: number;
}

export const useGetTotalEquipment = (
  options?: UseQueryOptions<unknown, unknown, TotalEquipment, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['total-equipment'],
    async () => {
      const response = await api<TotalEquipment>(axios.get('assets/total-equipment'));

      return response;
    },
    options,
  );
};
