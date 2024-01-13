'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { ConfigProvider } from 'antd'
import ruRu from 'antd/locale/ru_RU'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider locale={ruRu}>
      <SessionProvider>{children}</SessionProvider>
    </ConfigProvider>
  )
}
