'use client'
import { Button, Col, Row } from '@/ui'
import { EditOutlined } from '@ant-design/icons'
import ReviewInfoItem from '@/modules/hotel/components/Review/ReviewInfoItem'

export interface IReviewItem {
  uid: string
  name: string
  createdAt: string
  rating: number
  description: string
}

interface ReviewItemProps {
  review: IReviewItem
  setEdit?: (value: boolean) => void
}

export default function ReviewItem(props: ReviewItemProps) {
  return (
    <Row gutter={[0, 8]}>
      <ReviewInfoItem review={props.review} />
      <Col span={24}>
        {props?.setEdit && (
          <Button icon={<EditOutlined />} type="link" onClick={() => props.setEdit(true)}>
            Редактировать
          </Button>
        )}
      </Col>
    </Row>
  )
}
