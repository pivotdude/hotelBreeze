import { ReactNode } from 'react'

interface FullScreenFormProps {
  children: ReactNode
  title: string
}

export default function FullScreenForm({ children, title }: FullScreenFormProps) {
  return <div className="h-screen flex flex-col justify-center items-center space-y-10">{children}</div>
}
