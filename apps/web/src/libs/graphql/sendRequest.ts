import constants from '@/constants'
import initMocks from '@/mocks/server'
import client from '@/libs/graphql/index'
import processGraphqlError from '@/helpers/processGraphqlError'
import { authOptions } from '@/libs/auth'

if (constants.STABS_ENABLE === 'true') {
  initMocks()
}
async function getToken() {
  if (typeof window === 'undefined') {
    const getSession = (await import('./serverSession')).getSession
    return getSession(authOptions)
  } else {
    const getSession = (await import('./clientSession')).getClientSession
    return getSession()
  }
}

export default async function sendRequest<T>(query: any, vars: any = {}) {
  const token = await getToken()
  // console.log('token', token)
  try {
    return (await client.request(query, vars, { Authorization: token || '' })) as T
  } catch (error: any) {
    //   console.log('initial error', error)
    return processGraphqlError(error)
  }
}
