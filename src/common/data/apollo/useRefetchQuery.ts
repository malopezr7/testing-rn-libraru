import {useCallback} from 'react';
import {buildExceptionFromApolloError} from 'common/data/apollo/exception';

type Params<T> = {refetch: () => Promise<T>};

const useRefetchQuery = <T>({refetch}: Params<T>) => {
  const handleRefetch = useCallback(async () => {
    try {
      return await refetch();
    } catch (err) {
      throw buildExceptionFromApolloError(err);
    }
  }, [refetch]);

  return {
    handleRefetch,
  };
};

export default useRefetchQuery;
