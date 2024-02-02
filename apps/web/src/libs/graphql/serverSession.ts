import { getServerSession } from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'

export const getSession = async (authOptions: NextAuthOptions) => {
  const session = (await getServerSession(authOptions)) as { accessToken: string }
  // console.log('server session', session)
  return session?.accessToken
}
