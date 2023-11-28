import 'server-only'
import { BACKEND_URL, STABS_ENABLE } from '@/constants/proccess'
import request from 'graphql-request'
import initMocks from '@/mocks/server'

if (STABS_ENABLE) {
  initMocks()
}

export default async function sendRequest<T>(query: any): Promise<T> {
  return request(BACKEND_URL + '/graphql', query)
}
