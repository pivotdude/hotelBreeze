import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { IEmailFormData } from '@/components/app/forms/EmailForm'

export interface SignInQuery {
  login: {
    message: string
  }
}

export const sendLogin = async ({ email }: IEmailFormData): Promise<SignInQuery | void> => {
  const query = gql`
    mutation login($email: String!) {
      login(email: $email) {
        message
      }
    }
  `
  return sendRequest<SignInQuery>(query, { email })
}
