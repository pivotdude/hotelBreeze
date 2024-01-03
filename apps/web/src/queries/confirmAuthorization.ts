import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { ICodeFormData } from '@/components/app/forms/CodeForm'

export interface ConfirmAuthorizationResponse {
  confirmAuthorization: {
    message: string
  }
}

export const confirmAuthorization = async ({ email, code }: ICodeFormData): Promise<ConfirmAuthorizationResponse> => {
  const query = gql`
    mutation confirmAuthorization($email: String!, $code: String!) {
      confirmAuthorization(email: $email, code: $code) {
        message
      }
    }
  `
  return sendRequest<ConfirmAuthorizationResponse>(query, { email, code })
}
