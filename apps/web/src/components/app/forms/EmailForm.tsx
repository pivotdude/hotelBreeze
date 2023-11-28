'use client'
import FormItem from '@/components/app/forms/FormItem'
import { FormEvent, useRef, useState } from 'react'
import getErrors, { IEmailFormData } from '@/schemes/EmailSchema'
import { Button, Input } from 'antd'

export default function EmailForm() {
  const formRef = useRef()
  const [errors, setErrors] = useState<IEmailFormData>({})

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const email = formData.get('email') as string
    const errors = getErrors({ email })
    // @ts-ignore
    setErrors(errors)
  }

  return (
    // @ts-ignore
    <form onSubmit={onSubmit} ref={formRef}>
      <FormItem>
        <Input
          type="string"
          placeholder="mail@example.com"
          className="max-w-xs"
          name="email"
        />
      </FormItem>
      <FormItem>
        <Button>Отправить</Button>
      </FormItem>
    </form>
  )
}
