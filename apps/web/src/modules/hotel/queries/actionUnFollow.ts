import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface HotelQuery {
  unfollow: {
    id: number
  }
}

export const actionUnFollow = async (uid: string): Promise<HotelQuery | void> => {
  const query = gql`
    mutation Unfollow($uid: String!) {
      unfollow(uid: $uid) {
        id
      }
    }
  `
  return sendRequest<HotelQuery>(query, { uid })
}
