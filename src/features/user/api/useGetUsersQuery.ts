import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { PageableResponse, PaginationQueries } from '~/types/pagination';
import { removeUndefinedKeyValues } from '~/utils/object';
import { ModifiedUser } from '../types';

interface UsersQuery extends PaginationQueries {
  search?: string;
}

export const useGetUsersQuery = (
  queries?: UsersQuery,
  options?: UseQueryOptions<unknown, unknown, PageableResponse<ModifiedUser>, any>,
) => {
  const { axiosWithToken, api } = useApiClient();

  if (queries) {
    queries = removeUndefinedKeyValues(queries);
  }

  return useQuery(
    ['users', queries],
    async () => {
      const response = await api<PageableResponse<ModifiedUser>>(
        axiosWithToken.get('/admin/users', { params: queries }),
      );

      return response;
    },
    options,
  );
};
