import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

interface Hotel {
  uid: string
  price: number
  title: string
  description: string
  reviewRating: number
  reviewCount: number
  previewImage: {
    url: string
    name: string
  }
}

export interface IProfile {
  id: string
  uid: string
  name: string
  favorites: {
    hotel: Hotel[]
  }[]
  bookings: IBooking[]
}

export interface IBooking {
  uid: string
  startDate: string
  endDate: string
  days: number
  guests: number
  price: number
  hotel: Hotel
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
        bookings {
          uid
          startDate
          endDate
          days
          guests
          price
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
  return sendRequest<ProfileResponse>(query, {})
}
