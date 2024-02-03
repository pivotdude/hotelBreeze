'use client'
import { Button, Form, Input, message, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

export interface IEmailFormData {
  email: string
}

interface FileType {
  type: string
  size: number
}

interface EmailFormProps {
  onSubmit?: (form: IEmailFormData) => void
}

const getBase64 = (img: Blob, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

export default function EditProfileForm(props: EmailFormProps) {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )
  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true)

      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as Blob, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  return (
    <Form onFinish={props.onSubmit} layout="vertical">
      <Form.Item
        name="name"
        label="Email"
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
      <Form.Item name="avatar">
        <input type="file" name="avatar" id="" />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
