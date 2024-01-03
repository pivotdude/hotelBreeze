'use client'
import { Button, Form, Input } from 'antd'

export interface IEmailFormData {
  email?: string
}

interface EmailFormProps {
  onSubmit?: (form: IEmailFormData) => void
}

export default function EmailForm(props: EmailFormProps) {
  return (
    <Form onFinish={props.onSubmit} layout="vertical">
      <Form.Item
        name="email"
        label="Введите email адрес"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите ваш email адрес',
          },
          {
            type: 'email',
            message: 'Пожалуйста введите корректный email адрес',
          },
        ]}
      >
        <Input type="string" placeholder="mail@example.com" className="max-w-xs" name="email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
