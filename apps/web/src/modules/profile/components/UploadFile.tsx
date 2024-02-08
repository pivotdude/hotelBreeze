import { Button, Form, message, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

interface UploadFileProps {
  setFileList: (value: any) => void
  fileList: Array<any>
}

const UploadFile: React.FC<UploadFileProps> = (props) => {
  const UploadProps = {
    beforeUpload: (file: any) => {
      const isImage = file.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      const isGt100M = file.size / 1024 / 1024 > 100

      if (!isImage) {
        message.error('Только изображения')
        return Upload.LIST_IGNORE
      } else if (isGt100M) {
        message.error('Размер файла не должен превышать 100 МБ')
        return Upload.LIST_IGNORE
      } else {
        props.setFileList([file])
      }

      return false
    },
    fileList: props.fileList,
    maxCount: 1,
    accept: '.jpg',
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <Form.Item
      name="avatar"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      rules={[
        {
          required: true,
          message: 'Пожалуйста, загрузите файл',
        },
      ]}
    >
      <Upload {...UploadProps}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
    </Form.Item>
  )
}
export default UploadFile
