import { gql } from "@apollo/client";

export const AUTHENTICATE_SIGNIN = gql`
mutation sign_in($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`