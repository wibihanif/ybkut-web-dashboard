import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PaginationQueries } from '~/types/pagination';

interface CsrPlanQuery extends PaginationQueries {
  startDate: string;
  endDate: string;
}

interface CsrPlan {
  account: string;
  plan: string;
}

export const useGetCsrPlan = (
  queries?: CsrPlanQuery,
  options?: UseQueryOptions<unknown, unknown, CsrPlan[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['csr-plan', queries],
    async () => {
      const response = await api<CsrPlan[]>(axios.get('accounting/csr-plan', { params: queries }));

      return response;
    },
    options,
  );
};
