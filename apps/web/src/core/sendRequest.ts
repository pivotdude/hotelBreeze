// import 'server-only'
import { BACKEND_URL, STABS_ENABLE } from '@/constants/proccess'
import request from 'graphql-request'
import initMocks from '@/mocks/server'
import { notification } from 'antd'

if (STABS_ENABLE) {
  initMocks()
}

export default async function sendRequest<T>(query: any, vars: any = {}) {
  try {
    return (await request(BACKEND_URL + '/graphql', query, vars)) as T
  } catch (error: any) {
    const errorMessage = error.response.errors[0].message
    for (const err of error.response.errors) {
      notification.error({
        message: 'Ошибка',
        description: err.message,
      })
    }
    throw new Error('Error: ' + errorMessage)
  }
}
