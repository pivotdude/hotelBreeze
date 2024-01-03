import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { IEmailFormData } from '@/components/app/forms/EmailForm'

export interface SignInQuery {
  signIn: {
    message: string
  }
}

export const signIn = async ({ email }: IEmailFormData): Promise<SignInQuery> => {
  const query = gql`
    mutation signIn($email: String!) {
      signIn(email: $email) {
        message
      }
    }
  `
  return sendRequest<SignInQuery>(query, { email })
}
