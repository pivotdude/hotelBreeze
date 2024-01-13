import gql from 'graphql-tag'
import sendRequest from '@/core/sendRequest'

export interface IProfile {
  uid: string
  name: string
}

export interface ProfileResponse {
  profile: IProfile
}

export const fetchProfile = async (): Promise<ProfileResponse | void> => {
  const query = gql`
    query GetProfile {
      profile {
        uid
        name
      }
    }
  `
  return sendRequest<ProfileResponse>(query, {}, true)
}
