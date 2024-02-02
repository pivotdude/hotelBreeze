import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface HotelQuery {
  follow: {
    id: number
  }
}

export const actionFollow = async (hotelUid: string): Promise<HotelQuery | void> => {
  const query = gql`
    mutation Follow($hotelUid: String!) {
      follow(hotelUid: $hotelUid) {
        id
      }
    }
  `
  return sendRequest<HotelQuery>(query, { hotelUid })
}
