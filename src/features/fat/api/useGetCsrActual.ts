import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PaginationQueries } from '~/types/pagination';

interface CsrActualQuery extends PaginationQueries {
  startDate: string;
  endDate: string;
}

interface CsrActual {
  account: string;
  actual: string;
}

export const useGetCsrActual = (
  queries?: CsrActualQuery,
  options?: UseQueryOptions<unknown, unknown, CsrActual[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['csr-actual', queries],
    async () => {
      const response = await api<CsrActual[]>(
        axios.get('accounting/csr-actual', { params: queries }),
      );

      return response;
    },
    options,
  );
};
