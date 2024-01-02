'use client'
import FullScreenForm from '@/components/app/forms/FullScreenForm'
import EmailForm, { IEmailFormData } from '@/components/app/forms/EmailForm'
import { signIn } from '@/queries/signIn'
import { getNotification } from '@/helpers/utils'

export default function LoginPage() {
  const onSubmit = async ({ email }: IEmailFormData) => {
    const result = await signIn({ email })
    console.log('rrr1', result)
    if (!result) return
    getNotification(result.signin)
  }
  return (
    <FullScreenForm>
      <EmailForm title="Вход" onSubmit={onSubmit} />
    </FullScreenForm>
  )
}
