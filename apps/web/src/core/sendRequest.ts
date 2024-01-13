// import 'server-only'
import constants from '@/constants'
import initMocks from '@/mocks/server'
import client from '@/libs/graphql'
import processGraphqlError from '@/helpers/processGraphqlError'

if (constants.STABS_ENABLE === 'enabled') {
  initMocks()
}

export default async function sendRequest<T>(query: any, vars: any = {}, withToken: boolean = false) {
  try {
    return (await client.request(query, vars)) as T
  } catch (error: any) {
    console.log('initial error', error)
    return processGraphqlError(error)
  }
}
