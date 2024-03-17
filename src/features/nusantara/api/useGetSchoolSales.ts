import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetSchoolSales = (options?: UseQueryOptions<unknown, unknown, any, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['school-sales'],
    async () => {
      const response = await api(axios.get('school/sales'));

      return response;
    },
    options,
  );
};
