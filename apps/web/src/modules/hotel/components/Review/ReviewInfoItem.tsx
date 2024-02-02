import { Avatar, Col, Row } from '@/ui'
import dayjs from '@/libs/dayjs'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import { IReviewItem } from '@/modules/hotel/components/Review/ReviewItem'

interface ReviewInfoItemProps {
  review: IReviewItem
}

export default function ReviewInfoItem(props: ReviewInfoItemProps) {
  console.log(props)
  return (
    <>
      <Col span={24}>
        <Row className="items-center" gutter={[16, 0]}>
          <Col>
            <Avatar size={48} />
          </Col>
          <Col>
            <p className="font-medium">{props.review.name}</p>
            <p className="font-light">{dayjs(props.review.createdAt).format('DD MMMM YYYY')}</p>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <ReviewsStar className="ml-3" rating={props.review.rating} />
      </Col>
      <Col span={24}>
        <p>{props.review.description}</p>
      </Col>
    </>
  )
}
