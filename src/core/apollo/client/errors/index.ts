import type {ApolloCache, NormalizedCacheObject} from '@apollo/client';
import {clearToken} from 'common/data/userTokenRepository';
import type {GraphQLError} from 'graphql';
import {BackendError} from './constants';

const errorHandler = (
  cache: ApolloCache<NormalizedCacheObject>,
  errors?: readonly GraphQLError[],
) => {
  const isDecodingSignatureError = errors?.some(
    error => error.message === BackendError.DECODING_SIGNATURE,
  );

  const isTokenExpiredError = errors?.some(
    error => error.message === BackendError.TOKEN_EXPIRED,
  );

  const shouldClearToken = isDecodingSignatureError || isTokenExpiredError;

  if (shouldClearToken) {
    clearToken();
  }
};

export default errorHandler;
