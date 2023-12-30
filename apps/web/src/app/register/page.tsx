import EmailForm from '@/components/app/forms/EmailForm'
import FullScreenForm from '@/components/app/forms/FullScreenForm'

export default function SignUpPage() {
  return (
    <FullScreenForm>
      <EmailForm title="Регистрация" />
    </FullScreenForm>
  )
}
