import { gql } from 'graphql-tag'
import sendRequest from '@/core/sendRequest'
import { IEmailFormData } from '@/components/app/forms/EmailForm'
import { NotificationType } from '@/models'

export interface SignInQuery {
  signin: {
    message: string
    type: NotificationType
  }
}

export const signIn = async ({ email }: IEmailFormData): Promise<SignInQuery | undefined> => {
  const query = gql`
    mutation signin($email: String!) {
      signin(email: $email) {
        message
        type
      }
    }
  `
  return sendRequest<SignInQuery>(query, { email })
}
