import { ReactNode } from 'react'

interface FormItemProps {
  children: ReactNode
}

export default function FormItem({ children }: FormItemProps) {
  return <div className="py-2">{children}</div>
}
