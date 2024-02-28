'use client'
import { Button } from '@/ui'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return <Button onClick={() => signOut()}>Выйти</Button>
}
