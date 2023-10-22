import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { UserResponse } from '../types';
import { useApiClient } from '~/providers/ApiClientProvider';

export const useGetUserInformationQuery = (
  id: string,
  options?: UseQueryOptions<unknown, unknown, UserResponse, string[]>,
) => {
  const { axiosWithToken, api } = useApiClient();

  return useQuery(
    ['user', id],
    async () => {
      const userInformation = await api<UserResponse>(axiosWithToken.get(`/admin/users/${id}`));

      return userInformation;
    },
    options,
  );
};
