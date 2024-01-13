'use client'
import FullScreenForm from '@/components/app/forms/FullScreenForm'
import EmailForm, { IEmailFormData } from '@/components/app/forms/EmailForm'
import { useState } from 'react'
import CodeForm from '@/components/app/forms/CodeForm'
import { signUp } from '@/queries/signUp'
import Notification from '@/helpers/Notification'
import { confirmRegistration } from '@/queries/confirmRegistration'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const registration = async ({ email }: IEmailFormData) => {
    const result = await signUp({ email })
    if (result) {
      setEmail(email)
      Notification.info(result.registration.message)
      setStep(2)
    }
  }

  const verifyRegistration = async ({ code, name }: { code: string; name: string }) => {
    const result = await confirmRegistration({ email, code, name })
    console.log(result)
    if (result) {
      Notification.success(result.confirmRegistration.message)
    }
    router.push('/login')
  }

  return (
    <FullScreenForm title="Регистрация">
      {step === 1 ? <EmailForm onSubmit={registration} /> : <CodeForm onSubmit={verifyRegistration} withName={true} />}
    </FullScreenForm>
  )
}
