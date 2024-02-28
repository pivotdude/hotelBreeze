import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface Hotel {
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

export interface HotelsQuery {
  hotels: Hotel[]
}

interface HotelFilterInput {
  country: string
}

export const fetchHotels = async (input?: HotelFilterInput): Promise<HotelsQuery | void> => {
  const query = gql`
    query GetHotels($input: CountryFilterInput!) {
      hotels(input: $input) {
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
  `

  return sendRequest<HotelsQuery>(query, { input })
}
