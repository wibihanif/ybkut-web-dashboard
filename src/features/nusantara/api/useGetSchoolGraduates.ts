import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetSchoolGraduates = (options?: UseQueryOptions<unknown, unknown, any, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['school-graduates'],
    async () => {
      const response = await api(axios.get('school/graduate'));

      return response;
    },
    options,
  );
};
