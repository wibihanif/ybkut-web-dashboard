import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetSchoolLocations = (options?: UseQueryOptions<unknown, unknown, any, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['school-locations'],
    async () => {
      const response = await api(axios.get('school/location'));

      return response;
    },
    options,
  );
};
