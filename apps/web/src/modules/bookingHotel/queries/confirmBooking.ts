import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface ConfirmBookingInput {
  startDate: string
  endDate: string
  guests: number
  hotelUid: string
}

interface IBooking {}

export interface BookingQuery {
  booking: IBooking
}

export const confirmBooking = async (input: ConfirmBookingInput): Promise<BookingQuery | void> => {
  const query = gql`
    mutation ConfirmBooking($input: BookingCreateInput!) {
      confirmBooking(input: $input) {
        id
      }
    }
  `
  return sendRequest<BookingQuery>(query, { input })
}
