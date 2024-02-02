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

export const updateProfile = async (): Promise<ProfileResponse | void> => {
  const query = gql`
    mutation createReview($input: updateProfile!) {
      updateProfile(input: $input) {
        id
      }
    }
  `
  return sendRequest<ProfileResponse>(query, {})
}
