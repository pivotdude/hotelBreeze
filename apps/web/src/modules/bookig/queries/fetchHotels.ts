import gql from 'graphql-tag'
import sendRequest from '@/core/sendRequest'

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

export const fetchHotels = async (): Promise<HotelsQuery | void> => {
  const query = gql`
    query GetHotels {
      hotels {
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

  return sendRequest<HotelsQuery>(query)
}
