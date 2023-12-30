'use client'
import { FormEvent, useRef, useState } from 'react'
import getErrors, { IEmailFormData } from '@/schemes/EmailSchema'
import { Button, Card, Form, Input } from 'antd'

export default function EmailForm(props: { title: string }) {
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
    <Card className="w-96" title={props.title}>
      <Form onFinish={onSubmit} layout="vertical">
        <Form.Item name="email" label="Введите email адрес">
          <Input
            type="string"
            placeholder="mail@example.com"
            className="max-w-xs"
            name="email"
          />
        </Form.Item>
        <Button>Отправить</Button>
      </Form>
    </Card>
  )
}
