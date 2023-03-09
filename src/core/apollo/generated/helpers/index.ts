/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type ChangePasswordKeySpecifier = (
  | 'errors'
  | 'passwordChanged'
  | ChangePasswordKeySpecifier
)[];
export type ChangePasswordFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordChanged?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateLinkKeySpecifier = (
  | 'contentType'
  | 'retrieveUrl'
  | 'uploadUrl'
  | CreateLinkKeySpecifier
)[];
export type CreateLinkFieldPolicy = {
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  retrieveUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GenerateAccessCodeKeySpecifier = (
  | 'accessCodeSent'
  | 'errors'
  | GenerateAccessCodeKeySpecifier
)[];
export type GenerateAccessCodeFieldPolicy = {
  accessCodeSent?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginMobileKeySpecifier = (
  | 'errors'
  | 'token'
  | 'user'
  | LoginMobileKeySpecifier
)[];
export type LoginMobileFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginWebKeySpecifier = (
  | 'errors'
  | 'refreshToken'
  | 'token'
  | 'user'
  | LoginWebKeySpecifier
)[];
export type LoginWebFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'changePassword'
  | 'generateAccessCode'
  | 'getUploadUrl'
  | 'loginMobile'
  | 'loginWeb'
  | 'refreshToken'
  | 'resetPassword'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  changePassword?: FieldPolicy<any> | FieldReadFunction<any>;
  generateAccessCode?: FieldPolicy<any> | FieldReadFunction<any>;
  getUploadUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  loginMobile?: FieldPolicy<any> | FieldReadFunction<any>;
  loginWeb?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  resetPassword?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'checkEmailExists'
  | 'me'
  | 'user'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  checkEmailExists?: FieldPolicy<any> | FieldReadFunction<any>;
  me?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RefreshTokenKeySpecifier = (
  | 'errors'
  | 'token'
  | 'user'
  | RefreshTokenKeySpecifier
)[];
export type RefreshTokenFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResetPasswordKeySpecifier = (
  | 'errors'
  | 'reset'
  | ResetPasswordKeySpecifier
)[];
export type ResetPasswordFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  reset?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | UserErrorTypeKeySpecifier
)[];
export type UserErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserTypeKeySpecifier = (
  | 'avatar'
  | 'biography'
  | 'created'
  | 'email'
  | 'firstName'
  | 'id'
  | 'isActive'
  | 'lastName'
  | 'modified'
  | UserTypeKeySpecifier
)[];
export type UserTypeFieldPolicy = {
  avatar?: FieldPolicy<any> | FieldReadFunction<any>;
  biography?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  ChangePassword?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ChangePasswordKeySpecifier
      | (() => undefined | ChangePasswordKeySpecifier);
    fields?: ChangePasswordFieldPolicy;
  };
  CreateLink?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateLinkKeySpecifier
      | (() => undefined | CreateLinkKeySpecifier);
    fields?: CreateLinkFieldPolicy;
  };
  GenerateAccessCode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | GenerateAccessCodeKeySpecifier
      | (() => undefined | GenerateAccessCodeKeySpecifier);
    fields?: GenerateAccessCodeFieldPolicy;
  };
  LoginMobile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginMobileKeySpecifier
      | (() => undefined | LoginMobileKeySpecifier);
    fields?: LoginMobileFieldPolicy;
  };
  LoginWeb?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginWebKeySpecifier
      | (() => undefined | LoginWebKeySpecifier);
    fields?: LoginWebFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  RefreshToken?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RefreshTokenKeySpecifier
      | (() => undefined | RefreshTokenKeySpecifier);
    fields?: RefreshTokenFieldPolicy;
  };
  ResetPassword?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ResetPasswordKeySpecifier
      | (() => undefined | ResetPasswordKeySpecifier);
    fields?: ResetPasswordFieldPolicy;
  };
  UserErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserErrorTypeKeySpecifier
      | (() => undefined | UserErrorTypeKeySpecifier);
    fields?: UserErrorTypeFieldPolicy;
  };
  UserType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserTypeKeySpecifier
      | (() => undefined | UserTypeKeySpecifier);
    fields?: UserTypeFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
