import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface IBookingHotel {
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
  data: {
    maxGuests: number
  }
}

export interface HotelQuery {
  hotel: IBookingHotel
}

export const fetchHotel = async (uid: string): Promise<HotelQuery | void> => {
  const query = gql`
    query GetHotel($uid: String!) {
      hotel(uid: $uid) {
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
        data {
          maxGuests
        }
      }
    }
  `
  return sendRequest<HotelQuery>(query, { uid })
}
