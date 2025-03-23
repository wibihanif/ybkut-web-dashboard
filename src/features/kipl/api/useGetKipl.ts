import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetKipl = (options?: UseQueryOptions<unknown, unknown, any, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['kipl'],
    async () => {
      const response = await api(axios.get('kipl'));

      return response;
    },
    options,
  );
};
