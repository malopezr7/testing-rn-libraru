/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  UUID: string;
};

/** Changes user password. */
export type ChangePassword = {
  __typename?: 'ChangePassword';
  errors: Array<UserErrorType>;
  passwordChanged?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  /** Current password. */
  currentPassword: Scalars['String'];
  /** New passowrd. */
  newPassword: Scalars['String'];
  /** Repeated new password. */
  repeatedNewPassword: Scalars['String'];
};

export type CreateLink = {
  __typename?: 'CreateLink';
  contentType?: Maybe<Scalars['String']>;
  retrieveUrl?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
};

/** Generates one-time login code. */
export type GenerateAccessCode = {
  __typename?: 'GenerateAccessCode';
  /** Flag that determines if the code has been sent */
  accessCodeSent?: Maybe<Scalars['Boolean']>;
  errors: Array<UserErrorType>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Creates JWT mobile token. */
export type LoginMobile = {
  __typename?: 'LoginMobile';
  errors: Array<UserErrorType>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

/** Creates JWT web token. */
export type LoginWeb = {
  __typename?: 'LoginWeb';
  errors: Array<UserErrorType>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Changes user password. */
  changePassword?: Maybe<ChangePassword>;
  /** Generates one-time login code. */
  generateAccessCode?: Maybe<GenerateAccessCode>;
  getUploadUrl?: Maybe<CreateLink>;
  /** Creates JWT mobile token. */
  loginMobile?: Maybe<LoginMobile>;
  /** Creates JWT web token. */
  loginWeb?: Maybe<LoginWeb>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. */
  refreshToken?: Maybe<RefreshToken>;
  /** Reset passowrd. */
  resetPassword?: Maybe<ResetPassword>;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationGenerateAccessCodeArgs = {
  email: Scalars['String'];
};

export type MutationGetUploadUrlArgs = {
  input: UploadInput;
};

export type MutationLoginMobileArgs = {
  input: LoginInput;
};

export type MutationLoginWebArgs = {
  input: LoginInput;
};

export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type Query = {
  __typename?: 'Query';
  checkEmailExists?: Maybe<Scalars['Boolean']>;
  me?: Maybe<UserType>;
  user?: Maybe<UserType>;
};

export type QueryCheckEmailExistsArgs = {
  email: Scalars['String'];
};

export type QueryUserArgs = {
  email: Scalars['String'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors: Array<UserErrorType>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

export type RefreshTokenInput = {
  /** Refresh token. */
  refreshToken?: InputMaybe<Scalars['String']>;
};

/** Reset passowrd. */
export type ResetPassword = {
  __typename?: 'ResetPassword';
  errors: Array<UserErrorType>;
  reset?: Maybe<Scalars['Boolean']>;
};

export type ResetPasswordInput = {
  /** New passowrd. */
  password: Scalars['String'];
  /** Repeated new password. */
  repeatedPassword: Scalars['String'];
  /** Token to reset password. */
  token: Scalars['String'];
};

export type UploadInput = {
  contentType: Scalars['String'];
  filename: Scalars['String'];
  private: Scalars['Boolean'];
};

/** An enumeration. */
export enum UserErrorCodes {
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
  AlreadyExists = 'ALREADY_EXISTS',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidEmail = 'INVALID_EMAIL',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type UserErrorType = {
  __typename?: 'UserErrorType';
  /** User error code. */
  code: UserErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
};

export type TokenDataFragment = {
  __typename?: 'LoginMobile';
  token?: string | undefined | null;
};

export type MeDataFragment = {
  __typename?: 'UserType';
  id: string;
  email: string;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  loginMobile?:
    | {__typename?: 'LoginMobile'; token?: string | undefined | null}
    | undefined
    | null;
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: 'Query';
  me?: {__typename?: 'UserType'; id: string; email: string} | undefined | null;
};

export const TokenDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: {kind: 'Name', value: 'TokenData'},
      typeCondition: {
        kind: 'NamedType',
        name: {kind: 'Name', value: 'LoginMobile'},
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{kind: 'Field', name: {kind: 'Name', value: 'token'}}],
      },
    },
  ],
} as unknown as DocumentNode<TokenDataFragment, unknown>;
export const MeDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: {kind: 'Name', value: 'MeData'},
      typeCondition: {
        kind: 'NamedType',
        name: {kind: 'Name', value: 'UserType'},
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {kind: 'Field', name: {kind: 'Name', value: 'id'}},
          {kind: 'Field', name: {kind: 'Name', value: 'email'}},
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeDataFragment, unknown>;
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {kind: 'Name', value: 'Login'},
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {kind: 'Name', value: 'LoginInput'},
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'loginMobile'},
            arguments: [
              {
                kind: 'Argument',
                name: {kind: 'Name', value: 'input'},
                value: {kind: 'Variable', name: {kind: 'Name', value: 'input'}},
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {kind: 'Name', value: 'TokenData'},
                },
              ],
            },
          },
        ],
      },
    },
    ...TokenDataFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {kind: 'Name', value: 'Me'},
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {kind: 'Name', value: 'me'},
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {kind: 'FragmentSpread', name: {kind: 'Name', value: 'MeData'}},
              ],
            },
          },
        ],
      },
    },
    ...MeDataFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
