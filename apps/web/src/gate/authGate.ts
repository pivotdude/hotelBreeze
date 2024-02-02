import { authOptions } from '@/libs/auth'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function authGateServer() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect('/login')
  }
}
