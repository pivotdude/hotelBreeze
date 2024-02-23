'use client'
import { Button, Form, Input } from 'antd'

export interface ICodeFormData {
  email: string
  code: string
  name?: string
}

interface EmailFormProps {
  title?: string
  onSubmit?: any
  withName?: boolean
}

export default function CodeForm(props: EmailFormProps) {
  return (
    <Form onFinish={props.onSubmit} layout="vertical">
      <Form.Item
        name="code"
        label="Введите код отправленный на почту"
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
        <Input type="string" className="max-w-xs" maxLength={4} name="code" />
      </Form.Item>
      {props.withName && (
        <>
          <Form.Item
            name="name"
            label="Введите ваш никнейм"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите никнейм',
              },
              {
                min: 4,
                message: 'Должно быть минимум 4 цифры',
              },
            ]}
          >
            <Input type="string" maxLength={16} className="max-w-xs" name="name" />
          </Form.Item>
        </>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
