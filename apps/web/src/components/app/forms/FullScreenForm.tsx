import { ReactNode } from 'react'

interface FullScreenFormProps {
  children: ReactNode
}

export default function FullScreenForm({ children }: FullScreenFormProps) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  )
}
