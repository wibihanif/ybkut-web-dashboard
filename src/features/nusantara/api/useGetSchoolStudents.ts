import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetSchoolStudents = (options?: UseQueryOptions<unknown, unknown, any, any>) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['school-students'],
    async () => {
      const response = await api(axios.get('school/student'));

      return response;
    },
    options,
  );
};
