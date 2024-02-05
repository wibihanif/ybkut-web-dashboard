import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface TotalDoneDepreciation {
  totalDoneDepreciation: number;
}

export const useGetTotalDoneDepreciation = (
  options?: UseQueryOptions<unknown, unknown, TotalDoneDepreciation, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['done-depresiation'],
    async () => {
      const response = await api<TotalDoneDepreciation>(axios.get('assets/done-depresiation'));

      return response;
    },
    options,
  );
};
