import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface IHotel {}

export interface HotelQuery {
  hotel: IHotel
}

interface UpdateReviewInput {
  rating: number
  description: string
  reviewUid: string
}

export const updateReview = async (input: UpdateReviewInput): Promise<HotelQuery | void> => {
  console.log('update', input)
  const query = gql`
    mutation updateReview($input: UpdateReviewInput!) {
      updateReview(input: $input) {
        id
      }
    }
  `
  return sendRequest<HotelQuery>(query, { input })
}
