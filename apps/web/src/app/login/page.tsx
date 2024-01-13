'use client'
import FullScreenForm from '@/components/app/forms/FullScreenForm'
import EmailForm, { IEmailFormData } from '@/components/app/forms/EmailForm'
import { useState } from 'react'
import CodeForm from '@/components/app/forms/CodeForm'
import Notification from '@/helpers/Notification'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { sendLogin } from '@/queries/sendLogin'

interface ISignIn {
  error: string
  ok: boolean
  status: number
  url: string | null
}

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')

  const login = async ({ email }: IEmailFormData) => {
    const result = await sendLogin({ email })

    if (result) {
      setEmail(email)
      Notification.info(result.login.message)
      setStep(2)
    }
  }

  const verifyLogin = async ({ code }: { code: string }) => {
    const result = (await signIn('credentials', {
      email: email,
      code: code,
      redirect: false,
    })) as ISignIn
    console.log(result)
    if (result) {
      if (result.ok) {
        Notification.success('Вы вошли в свою учетную запись')
      } else {
        const errorMessages = result.error
        Notification.error(errorMessages)
      }
    }
  }

  return (
    <FullScreenForm title="Авторизация">
      {step === 1 ? <EmailForm onSubmit={login} /> : <CodeForm onSubmit={verifyLogin} />}
    </FullScreenForm>
  )
}
