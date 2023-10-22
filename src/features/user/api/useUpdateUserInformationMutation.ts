import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { useApiClient } from '~/providers/ApiClientProvider';
import { User } from '../types';

interface UpdateUserInformationArgs {
  userId: string;
  payload: {
    phoneNumber: string;
    SRE: string;
    SID: string;
  };
}

export const useUpdateUserInformationMutation = (
  options?: UseMutationOptions<unknown, unknown, UpdateUserInformationArgs>,
) => {
  const { api, axiosWithToken } = useApiClient();

  return useMutation(async ({ userId, payload }) => {
    const updateUserInformationRequest = await api<User>(
      axiosWithToken.patch(`/admin/users/${userId}`, {
        ...payload,
      }),
    );

    return updateUserInformationRequest;
  }, options);
};
