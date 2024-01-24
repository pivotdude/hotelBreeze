import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface IProfile {
  id: string
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
        id
        name
      }
    }
  `
  return sendRequest<ProfileResponse>(query, {}, true)
}
