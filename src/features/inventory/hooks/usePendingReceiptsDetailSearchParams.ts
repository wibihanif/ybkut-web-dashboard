import { useEffect } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import { SortOrder } from '~/types/pagination';

export const usePendingReceiptsDetailSearchParams = ({
  setSearchParams,
  page,
  debouncedSearched,
  sortBy,
  sortOrder,
}: {
  setSearchParams: SetURLSearchParams;
  page: number;
  debouncedSearched: string | undefined;
  sortBy: string;
  sortOrder: SortOrder;
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
      if (!debouncedSearched) {
        params.delete('search');
      } else {
        params.set('search', debouncedSearched);
      }
      return params;
    });
  }, [debouncedSearched, setSearchParams]);

  //   set sortBy
  useEffect(() => {
    setSearchParams(params => {
      if (!sortBy) {
        params.delete('sortBy');
      } else {
        params.set('sortBy', sortBy);
      }
      return params;
    });
  }, [sortBy, setSearchParams]);

  //   set sortOrder
  useEffect(() => {
    setSearchParams(params => {
      if (!sortOrder) {
        params.delete('sortOrder');
      } else {
        params.set('sortOrder', sortOrder);
      }
      return params;
    });
  }, [sortOrder, setSearchParams]);
};
