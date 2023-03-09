import {useMemo} from 'react';
import {useQuery} from '@apollo/client';
import useRefetchQuery from 'common/data/apollo/useRefetchQuery';
import type {MeDataFragment} from 'features/common/data/MeRepository/generated/schema';
import {MeDocument} from 'features/common/data/MeRepository/generated/schema';
import type {Me} from 'features/common/models/Me';

const normalizeMe = (data: MeDataFragment): Me => ({
  id: data.id,
  email: data.email,
});

export const useMeRepository = () => {
  const {data, refetch} = useQuery(MeDocument, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  const userData = data?.me;
  const me = useMemo(
    () => (userData ? normalizeMe(userData) : undefined),
    [userData],
  );

  const {handleRefetch} = useRefetchQuery({refetch});
  return {
    me,
    refetch: handleRefetch,
  };
};
