// import 'server-only'
import { BACKEND_URL, NODE_MODE, STABS_ENABLE } from '@/constants/proccess'
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
    if (NODE_MODE === 'development') {
      notification.error({
        message: 'Request Error',
        description: error.message,
      })
    }
    console.error(error)
  }
}

//
//
// // import 'server-only'
// import { BACKEND_URL, STABS_ENABLE } from '@/constants/proccess'
// import request from 'graphql-request'
// import initMocks from '@/mocks/server'
// import { notification } from 'antd'
//
// if (STABS_ENABLE) {
//   initMocks()
// }
// interface ErrorQuery {
//   path: String[]
//   message: String
//   locations: Array<{ line: number; column: number }>
//   extensions: {
//     code: string
//   }
// }
//
// interface ResponseQuery<T> {
//   data: T | null
//   errors: ErrorQuery[]
// }
//
// export default async function sendRequest<T>(query: any, vars: any = {}) {
//   const response = (await request(BACKEND_URL + '/graphql', query, vars)) as ResponseQuery<T>
//   if (response.errors.length > 0) {
//     for (const error of response.errors) {
//       notification.error({
//         message: 'Request Error',
//         description: error.message,
//       })
//     }
//   }
//   return response
// }
