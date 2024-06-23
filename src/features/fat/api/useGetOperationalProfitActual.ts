import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';

interface OprActualQueries {
  startDate?: string;
  endDate?: string;
}

interface OprActual {
  opr_profit: number;
}

interface TransformedOprActual {
  actualOprProfit: number;
}

export const useGetOperationalProfitActual = (
  queries?: OprActualQueries,
  options?: UseQueryOptions<unknown, unknown, TransformedOprActual, any>,
) => {
  const { axios, api } = useApiClient();

  return useQuery(
    ['opr-actual', queries],
    async () => {
      const response = await api<OprActual>(
        axios.get('accounting/opr-actual', { params: queries }),
      );

      const transformedResponse: TransformedOprActual = {
        actualOprProfit: response.opr_profit,
      };

      return transformedResponse;
    },
    options,
  );
};
