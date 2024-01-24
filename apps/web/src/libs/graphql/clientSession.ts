import { getSession } from 'next-auth/react'

export async function getClientSession() {
  const session = (await getSession()) as unknown as { accessToken: string }
  return session?.accessToken
}
