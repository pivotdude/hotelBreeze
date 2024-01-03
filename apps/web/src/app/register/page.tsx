'use client'
import FullScreenForm from '@/components/app/forms/FullScreenForm'
import EmailForm, { IEmailFormData } from '@/components/app/forms/EmailForm'
import { signIn } from '@/queries/signIn'
import { getNotification } from '@/helpers/utils'
import { useState } from 'react'
import CodeForm from '@/components/app/forms/CodeForm'
import { signUp } from '@/queries/signUp'

export default function LoginPage() {
  const [step, setStep] = useState(1)
  const registration = async ({ email }: IEmailFormData) => {
    const result = await signUp({ email })
    if (result && result.signUp.type !== 'error') {
      setStep(2)
    }
    getNotification(result.signUp)
  }

  const verifyRegistration = async ({ code }: { code: string }) => {
    const result = await signIn({ email })
    // set jwt

    getNotification(result.signin)
  }

  return (
    <FullScreenForm title="Регистрация">
      {step === 1 ? <EmailForm onSubmit={registration} /> : <CodeForm onSubmit={verifyRegistration} />}
    </FullScreenForm>
  )
}
