/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import gql from 'graphql-tag';
export const TokenData = gql`
  fragment TokenData on LoginMobile {
    token
  }
`;
export const MeData = gql`
  fragment MeData on UserType {
    id
    email
  }
`;
export const Login = gql`
  mutation Login($input: LoginInput!) {
    loginMobile(input: $input) {
      ...TokenData
    }
  }
  ${TokenData}
`;
export const Me = gql`
  query Me {
    me {
      ...MeData
    }
  }
  ${MeData}
`;
