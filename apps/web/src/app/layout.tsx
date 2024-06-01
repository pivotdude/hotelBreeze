import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Footer from '@/components/app/core/footer/Footer'
import NavBar from '@/components/app/core/NavBar'
import { Providers } from '@/components/app/core/providers'
import RootStyleRegistry from '@/components/app/core/stylePreload'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'HotelBreeze',
  description: 'Система бронирования отелей HotelBreeze',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={'m-0 ' + inter.className}>
        <Providers>
          <NavBar />
          <main className="min-h-screen max-w-full lg:mx-32 md:mx-24 sm:mx-8 mx-4">
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </main>
          <footer className="bg-gray-50 px-32 mt-24">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
