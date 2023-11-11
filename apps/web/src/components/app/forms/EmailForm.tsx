'use client'
import { Input } from '@nextui-org/input'
import { MailIcon } from '@nextui-org/shared-icons'
import { Button } from '@nextui-org/react'
import FormItem from '@/components/app/forms/FormItem'
import { FormEvent, ReactEventHandler, useRef, useState } from 'react'
import parseErrors, { IEmailFormData } from '@/schemes/EmailSchema'
import EmailSchema from '@/schemes/EmailSchema'
import getErrors from '@/schemes/EmailSchema'

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
          label="Email"
          variant="bordered"
          isInvalid={errors.email !== undefined}
          placeholder="mail@example.com"
          errorMessage={errors.email}
          className="max-w-xs"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="email"
        />
      </FormItem>
      <FormItem>
        <Button type="submit">Отправить</Button>
      </FormItem>
    </form>
  )
}
