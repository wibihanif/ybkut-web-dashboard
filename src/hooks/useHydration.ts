import { useStore } from '~/stores';
import { useZustandHydration } from './useZustandHydration';

export const useHydration = () => {
  const hydrated = useZustandHydration();

  const { accessToken } = useStore();

  const isAuthenticated = !!accessToken;

  return {
    hydrated,
    authenticated: isAuthenticated,
  };
};
