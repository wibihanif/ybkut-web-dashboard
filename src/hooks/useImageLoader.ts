import { env } from '~/config';

export const useImageLoader = () => {
  const loadPrivateImage = (fileName: string, hash?: string) => {
    const encodedFileName = encodeURIComponent(fileName);

    const queryParams = new URLSearchParams();
    queryParams.append('fileName', encodedFileName);

    if (hash) {
      const encodedHash = encodeURIComponent(hash);

      queryParams.append('hash', encodedHash);
    }

    const uri = new URL(`/files?${queryParams.toString()}`, `${env.VITE_API_URL}`).href;

    return { uri };
  };

  return { loadPrivateImage };
};
