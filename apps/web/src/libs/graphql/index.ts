import { GraphQLClient } from 'graphql-request'
import constants from '@/constants'

// async function getSession() {
//   if (typeof window === 'undefined') {
//     const getSession = (await import('./serverSession')).getSession
//     return getSession(authOptions)
//   } else {
//     const getSession = (await import('./clientSession')).getClientSession
//     return getSession()
//   }
// }

const client = new GraphQLClient(
  constants.BACKEND_URL + '/graphql'
  // {
  //   headers: () => ({ Authorization: 'Bearer ' + (await getServerSession(authOptions)) }),
  // }
)
export default client
