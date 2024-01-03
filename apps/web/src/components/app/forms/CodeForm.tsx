'use client'
import { Button, Form, Input } from 'antd'

export interface ICodeFormData {
  email: string
  code: string
}

interface EmailFormProps {
  title?: string
  onSubmit?: (form: { code: string }) => void
}

export default function CodeForm(props: EmailFormProps) {
  return (
    <Form onFinish={props.onSubmit} layout="vertical">
      <Form.Item
        name="code"
        label="Введите код отправленноый на почту"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите код',
          },
          {
            len: 4,
            message: 'Код должен содержать 4 цифры',
          },
        ]}
      >
        <Input type="string" className="max-w-xs" name="code" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
