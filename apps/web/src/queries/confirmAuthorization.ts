import { gql } from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'
import { ICodeFormData } from '@/components/app/forms/CodeForm'

export interface ConfirmAuthorization {
  message: string
  access_token: string
  user: {
    uid: string
    name: string
  }
}

export interface ConfirmAuthorizationResponse {
  confirmAuthorization: ConfirmAuthorization
}

export const confirmAuthorization = async ({
  email,
  code,
}: ICodeFormData): Promise<ConfirmAuthorizationResponse | void> => {
  if (!email || !code) return
  const query = gql`
    mutation confirmAuthorization($email: String!, $code: String!) {
      confirmAuthorization(email: $email, code: $code) {
        message
        access_token
        user {
          uid
          name
        }
      }
    }
  `
  return sendRequest<ConfirmAuthorizationResponse>(query, { email, code })
}
