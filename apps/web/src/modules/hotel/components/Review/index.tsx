'use client'
import { Col, Row, Title } from '@/ui'
import Statistic from '@/ui/Statistic'
import { StarOutlined } from '@ant-design/icons'
import ReviewItem, { IReviewItem } from './ReviewItem'
import ReviewList from './ReviewList'
import ReviewForm from '@/modules/hotel/components/Review/ReviewForm'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

interface ReviewProps {
  hotelUid: string
  reviewCount: number
  reviewRating: number
  reviews: IReviewItem[]
  userReview: IReviewItem
}

export default function Review(props: ReviewProps) {
  const [edit, setEdit] = useState(false)
  const session = useSession()
  return (
    <Row gutter={[64, 32]}>
      <Col span={24}>
        <Row gutter={[32, 0]}>
          <Col>
            <Statistic title="Отзывов" value={props.reviewCount} />
          </Col>
          <Col>
            <Statistic
              title="Средняя оценка"
              value={props.reviewRating}
              prefix={<StarOutlined className="text-pink-400" />}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        {edit && ( // edit review
          <ReviewForm
            hotelUid={props.hotelUid}
            data={{ rating: props.userReview.rating, description: props.userReview.description }}
            reviewUid={props.userReview.uid}
            isEditable={true}
            disableEdit={() => setEdit(false)}
          />
        )}
      </Col>
      <Col span={24}>
        {session.status === 'authenticated' ? (
          <>
            {props.userReview ? (
              <ReviewItem review={props.userReview} setEdit={setEdit} /> // view review
            ) : (
              <ReviewForm hotelUid={props.hotelUid} /> // new review
            )}
          </>
        ) : (
          <Title level={5}>Авторизуйтесь чтобы оставить отзыв</Title>
        )}
      </Col>
      <Col span={24}>{props.reviews.length === 0 && props.userReview === null && <p>Отзывов нет</p>}</Col>
      <Col span={24}>{props.reviews.length > 0 && <ReviewList reviews={props.reviews} />}</Col>
    </Row>
  )
}
