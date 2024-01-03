import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { IEmailFormData } from '@/components/app/forms/EmailForm'

export interface SignUpQuery {
  signUp: {
    message: string
  }
}

export const signUp = async ({ email }: IEmailFormData): Promise<SignUpQuery> => {
  const query = gql`
    mutation signUp($email: String!) {
      signUp(email: $email) {
        message
      }
    }
  `
  return sendRequest<SignUpQuery>(query, { email })
}
