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

export const fetchProfile = async (): Promise<ProfileResponse | void> => {
  const query = gql`
    query GetProfile {
      profile {
        uid
        id
        name
        favorites {
          hotel {
            uid
            title
            description
            price
            reviewRating
            reviewCount
            previewImage {
              url
              name
            }
          }
        }
      }
    }
  `
  return sendRequest<ProfileResponse>(query, {}, true)
}
