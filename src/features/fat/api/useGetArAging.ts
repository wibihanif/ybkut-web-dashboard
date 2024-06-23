import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';

interface ArAgingQuery extends PaginationQueries {
  startDate: string;
  endDate: string;
}

interface ArAging {
  unit: string;
  current: string;
  '1-30 days': string;
  '31-60 days': string;
  '61-90 days': string;
  '> 90 days': string;
}

export const useGetArAging = (
  queries?: ArAgingQuery,
  options?: UseQueryOptions<unknown, unknown, ArAging[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['ar-aging', queries],
    async () => {
      const response = await api<ArAging[]>(
        axios.get('accounting/revenue-ar-aging', { params: queries }),
      );

      return response;
    },
    options,
  );
};
