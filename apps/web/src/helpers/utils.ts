import { IUserSession, NotificationType } from '@/models'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/libs/auth'

interface IMessage {
  message: string
  type: NotificationType
}

export const trimText = (text: string, length: number, char: string = '...') => {
  return text.length > length ? text.slice(0, length) + char : text
}

export async function isAuthenticated(): Promise<boolean> {
  const session = (await getServerSession(authOptions)) as IUserSession
  if (!session) return false
  return session.user.isAuth
}

export function isBrowser() {
  return typeof window !== 'undefined'
}
