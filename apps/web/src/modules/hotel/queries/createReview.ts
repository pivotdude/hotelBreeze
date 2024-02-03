import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

interface IHotel {}

export interface HotelQuery {
  hotel: IHotel
}

interface CreateReviewInput {
  rating: number
  description: string
  hotelUid: string
}

export const createReview = async (input: CreateReviewInput): Promise<HotelQuery | void> => {
  const query = gql`
    mutation createReview($input: CreateReviewInput!) {
      createReview(input: $input) {
        id
      }
    }
  `
  return sendRequest<HotelQuery>(query, { input })
}
