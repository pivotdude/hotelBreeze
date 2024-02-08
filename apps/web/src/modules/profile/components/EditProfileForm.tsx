'use client'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { updateProfile } from '@/modules/profile/queries/updateProfile'
import UploadFile from '@/modules/profile/components/UploadFile'

export interface IEmailFormData {
  email: string
}

interface FileType {
  name: string
  type: string
  size: number
}

interface EmailFormProps {
  onSubmit?: (form: IEmailFormData) => void
}

export default function EditProfileForm(props: EmailFormProps) {
  const [form] = Form.useForm()
  const [uploading, setUploading] = useState(false)
  const [fileList, setFileList] = useState<FileType[]>([])

  const handleUpload = async (formData: any) => {
    try {
      await form.validateFields()

      setUploading(true)
      console.log(formData)

      const response = await updateProfile(formData)
    } catch (error) {
      console.error('Validation error:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <Form onFinish={handleUpload} layout="vertical" form={form}>
      <Form.Item
        name="name"
        label="Имя"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите имя',
          },
        ]}
      >
        <Input type="string" className="max-w-xs" />
      </Form.Item>
      <UploadFile fileList={fileList} setFileList={setFileList} />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
