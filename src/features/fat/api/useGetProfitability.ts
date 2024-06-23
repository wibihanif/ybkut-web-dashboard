import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';

interface ProfitabilityQuery extends PaginationQueries {
  startDate?: string;
  endDate?: string;
}

interface Profitability {
  unit: string;
  revenue: string;
  cost: string;
  gp: string;
  gpm: string;
  opex: string;
  op: string;
  opm: string;
}

export const useGetProfitability = (
  queries?: ProfitabilityQuery,
  options?: UseQueryOptions<unknown, unknown, Profitability[], any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['profitability', queries],
    async () => {
      const response = await api<Profitability[]>(
        axios.get('accounting/profitability', { params: queries }),
      );

      return response;
    },
    options,
  );
};
