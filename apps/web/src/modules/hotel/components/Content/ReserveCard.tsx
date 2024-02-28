'use client'
import { Card, Col, Row, Typography } from 'antd'
import ReviewPanel from '@/components/ui/Review/ReviewPanel'
import BookingForm from '@/modules/hotel/components/Content/BookingForm'

interface ReserveFormProps {
  price: number
  reviewRating: number
  reviewCount: number
  maxGuests: number
  hotelUid: string
  bookings: {
    endDate: string
    startDate: string
  }[]
}

export default function ReserveCard(props: ReserveFormProps) {
  return (
    <Card>
      <Row>
        <Col xs={24}>
          <Row justify="space-between">
            <Col>
              <Typography.Title level={4}>{props.price}₽ / сутки</Typography.Title>
            </Col>
            <Col className="flex items-center">
              <ReviewPanel rating={props.reviewRating} count={props.reviewCount} />
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <BookingForm
            maxGuests={props.maxGuests}
            price={props.price}
            hotelUid={props.hotelUid}
            bookings={props.bookings}
          />
        </Col>
      </Row>
    </Card>
  )
}
