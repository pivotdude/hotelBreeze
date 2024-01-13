import { ReactNode } from 'react'
import { Card } from 'antd'

interface FullScreenFormProps {
  children: ReactNode
  title: string
}

export default function FullScreenForm({ children, title }: FullScreenFormProps) {
  return (
    <div className="h-screen flex justify-center items-center w-screen">
      <Card className="w-96" title={title}>
        {children}
      </Card>
    </div>
  )
}
