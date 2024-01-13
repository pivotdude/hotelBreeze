import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { IEmailFormData } from '@/components/app/forms/EmailForm'

export interface SignUpQuery {
  registration: {
    message: string
  }
}

export const signUp = async ({ email }: IEmailFormData): Promise<SignUpQuery | void> => {
  const query = gql`
    mutation registration($email: String!) {
      registration(email: $email) {
        message
      }
    }
  `
  return sendRequest<SignUpQuery>(query, { email })
}
