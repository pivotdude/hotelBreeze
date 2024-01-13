import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ConfirmAuthorization, confirmAuthorization } from '@/queries/confirmAuthorization'

// @ts-ignore
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'mail@example.com',
        },
        code: { label: 'Code', type: 'number' },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.code) return null
          const { email, code } = credentials
          const result = await confirmAuthorization({ email, code })
          if (!result) return null
          return result.confirmAuthorization
        } catch (error) {
          // @ts-ignore
          throw new Error(error.message)
        }
      },
    }),
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }: { token: any; data: ConfirmAuthorization }) {
      user && (token.access_token = user.access_token)
      user && (token.user = user.user)
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      console.log('session token', token)
      session.access_token = token.access_token
      session.user = token.user
      console.log('return session', session)
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
