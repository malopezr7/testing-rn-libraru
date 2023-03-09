import {useCallback} from 'react';
import {useApolloClient, useMutation} from '@apollo/client';
import {buildExceptionFromApolloError} from 'common/data/apollo/exception';
import useUserTokenRepository from 'common/data/userTokenRepository';
import type {
  LoginMutation,
  LoginMutationVariables,
} from 'features/Auth/data/generated/schema';
import type {LoginInput} from 'features/Auth/models/LoginInput';
import {LoginDocument} from './generated/schema';

const useAuthRepository = () => {
  const apolloClient = useApolloClient();
  const {setToken, clearToken, logged} = useUserTokenRepository();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginMut] = useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    {
      fetchPolicy: 'network-only',
    },
  );

  const clearCache = useCallback(() => {
    clearToken();
    apolloClient.cache.evict({});
    apolloClient.cache.gc();
  }, [apolloClient.cache, clearToken]);

  const authenticate = useCallback(
    (token: string) => {
      setToken(token);
    },
    [setToken],
  );

  const deauthenticate = useCallback(() => {
    try {
      clearCache();
    } catch (error) {
      throw error;
    }
  }, [clearCache]);

  const login = useCallback(
    async (input: LoginInput) => {
      try {
        console.log('login', input);
        authenticate('token');

        // const response = await loginMut({variables: {input}});
        // const token = response.data?.loginMobile?.token ?? undefined;
        // if (!token) {
        //   throw new CustomError('Login failed');
        // }

        // authenticate(token);
      } catch (error) {
        throw buildExceptionFromApolloError(error);
      }
    },
    [authenticate],
  );

  const logout = useCallback(async () => {
    try {
      //   const response = await logoutMut();
      //   const ok = response.data?.logout?.loggedOut ?? false;
      //   if (!ok) {
      //     throw new Error('Logout failed');
      //   }

      deauthenticate();
    } catch (error) {
      throw buildExceptionFromApolloError(error);
    }
  }, [deauthenticate]);

  return {
    isAuthenticated: logged,
    login,
    logout,
  };
};

export default useAuthRepository;
