import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'
import { Hotel } from '@/modules/bookig/queries/fetchHotels'

export interface IProfile {
  id: string
  uid: string
  name: string
  favorites: {
    hotel: Hotel[]
  }[]
}

export interface ProfileResponse {
  profile: IProfile
}

export const updateProfile = async (input: { name: string; avatar: Blob }): Promise<ProfileResponse | void> => {
  const query = gql`
    mutation userUpdate($input: UserUpdateInput!) {
      userUpdate(input: $input) {
        id
      }
    }
  `
  return sendRequest<ProfileResponse>(query, { input })
}
