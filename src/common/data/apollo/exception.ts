import {ApolloError} from '@apollo/client';
import {CustomError} from 'common/models';

export const buildExceptionFromApolloError = (error: unknown): CustomError => {
  if (!(error instanceof ApolloError)) {
    return error as CustomError;
  }

  if (error.networkError) {
    return new CustomError(error.message);
  }

  const graphqlError = error.graphQLErrors?.[0] ?? undefined;
  if (!graphqlError || !graphqlError.extensions) {
    return new CustomError(error.message);
  }

  return new CustomError(graphqlError.message);
};
