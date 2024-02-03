import { gql } from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'
import { ICodeFormData } from '@/components/app/forms/CodeForm'

export interface ConfirmAuthorizationResponse {
  confirmRegistration: {
    message: string
  }
}

export const confirmRegistration = async ({
  email,
  code,
  name,
}: ICodeFormData): Promise<ConfirmAuthorizationResponse | void> => {
  const query = gql`
    mutation confirmRegistration($email: String!, $code: String!, $name: String!) {
      confirmRegistration(email: $email, code: $code, name: $name) {
        message
      }
    }
  `
  return sendRequest<ConfirmAuthorizationResponse>(query, { email, code, name })
}
