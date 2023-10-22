import { useEffect } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

export const useUsersSearchParams = ({
  setSearchParams,
  page,
  debouncedSearchedText,
}: {
  setSearchParams: SetURLSearchParams;
  page: number;
  debouncedSearchedText: string | undefined;
}): void => {
  // set page in search params when page changes
  useEffect(() => {
    if (page) {
      setSearchParams(params => {
        params.set('page', page.toString());

        return params;
      });
    }
  }, [page, setSearchParams]);

  // set email in search params
  useEffect(() => {
    setSearchParams(params => {
      if (!debouncedSearchedText) {
        params.delete('search');
      } else {
        params.set('search', debouncedSearchedText);
        params.set('page', page.toString());
      }
      return params;
    });
  }, [debouncedSearchedText, page, setSearchParams]);
};
