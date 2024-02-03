'use client'
import { Button, Form, Input, Rate } from 'antd'
import { createReview } from '@/modules/hotel/queries/createReview'
import { useRouter } from 'next/navigation'
import { updateReview } from '@/modules/hotel/queries/updateReview'

interface ReviewFormProps {
  hotelUid: string
  reviewUid?: string
  data?: {
    rating: number
    description: string
  }
  isEditable?: boolean
  disableEdit?: () => void
}

export default function ReviewForm(props: ReviewFormProps) {
  const router = useRouter()

  const onFinish = async (formData: any) => {
    props.isEditable
      ? await updateReview({ ...formData, reviewUid: props.reviewUid })
      : await createReview({ ...formData, hotelUid: props.hotelUid })
    props.disableEdit && props.disableEdit()
    router.refresh()
  }

  return (
    <>
      <Form layout="vertical" onFinish={onFinish} initialValues={props.data}>
        <Form.Item
          label="Оценка"
          name="rating"
          rules={[
            {
              validator: (rule, value) => {
                if (value && value >= 1) {
                  return Promise.resolve()
                }
                return Promise.reject('Поставьте оценку')
              },
            },
          ]}
        >
          <Rate />
        </Form.Item>
        <Form.Item label="Описание" name="description" required rules={[{ required: true, message: 'Оставьте отзыв' }]}>
          <Input.TextArea />
        </Form.Item>
        <Button htmlType="submit">Отправить</Button>
      </Form>
    </>
  )
}
