'use client'
import FullScreenForm from '@/components/app/forms/FullScreenForm'
import EmailForm, { IEmailFormData } from '@/components/app/forms/EmailForm'
import { signIn } from '@/queries/signIn'
import { useState } from 'react'
import CodeForm from '@/components/app/forms/CodeForm'
import Notification from '@/helpers/Notification'
import { confirmAuthorization } from '@/queries/confirmAuthorization'

export default function LoginPage() {
  const [step, setStep] = useState(1)
  const onSubmit = async ({ email }: IEmailFormData) => {
    await signIn({ email }).then((result) => {
      Notification.success(result.signIn.message)
      setStep(2)
    })
  }

  const verifySignIn = async ({ code, email }: { code: string }) => {
    await confirmAuthorization()
  }

  return (
    <FullScreenForm title="Авторизация">
      {step === 1 ? <EmailForm onSubmit={onSubmit} /> : <CodeForm onSubmit={verifySignIn} />}
    </FullScreenForm>
  )
}
