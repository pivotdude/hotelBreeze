import 'server-only'
import { httpMethods } from '@/models/CoreModels'
import constants from '@/constants'

export default async function getData<T>(
  url: string,
  method: httpMethods = 'GET',
  body: any = {},
  options: RequestInit = {}
): Promise<T> {
  const fetchOptions: RequestInit = {
    method,
    ...options,
  }

  if (method !== 'GET' && body) {
    fetchOptions.body = JSON.stringify(body)
  }

  const response: Response = await fetch(constants.BACKEND_URL + url, fetchOptions)
  const data: T = await response.json()
  return data as T
}
