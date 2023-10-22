import { notifications } from '@mantine/notifications';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AuthResponse } from '../types';
import { useStore } from '~/stores';
import { useApiClient } from '~/providers/ApiClientProvider';
import { useGoogleLogin } from '@react-oauth/google';
import { AxiosError } from 'axios';

export const useGoogleLoginMutation = (options?: UseMutationOptions<void, unknown>) => {
  const { onAuthSuccess } = useStore();
  const { axios, api } = useApiClient();
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async codeResponse => {
      try {
        const { access_token, refresh_token, user } = await api<AuthResponse>(
          axios.post('auth/google', {
            code: codeResponse.code,
          }),
        );

        onAuthSuccess({
          accessToken: access_token,
          refreshToken: refresh_token,
          user,
        });

        notifications.show({
          message: 'Successfully logged in',
          color: 'brand',
        });
      } catch (e) {
        const err = e as AxiosError<{ errors: string[] }>;
        const errors = err.response?.data?.errors;

        notifications.show({
          title: 'Something went wrong',
          message: errors?.length ? errors[0] : '',
          color: 'red',
        });
      }
    },
    onError: async errorResponse => {
      notifications.show({
        title: 'Something went wrong',
        message: errorResponse.error_description,
        color: 'red',
      });
    },
  });

  return useMutation(async () => {
    googleLogin();
  }, options);
};
