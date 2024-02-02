import { NotificationType } from '@/models'
import { getSession } from 'next-auth/react'

interface IMessage {
  message: string
  type: NotificationType
}

export const trimText = (text: string, length: number, char: string = '...') => {
  return text.length > length ? text.slice(0, length) + char : text
}

export async function isAuthenticated() {
  const session = getSession()
  console.log(session)
  // @ts-ignore
  return session.status === 'unauthenticated'
}

export function isBrowser() {
  return typeof window !== 'undefined'
}
