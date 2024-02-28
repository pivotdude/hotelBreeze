'use client'
import { Card, Col, Row } from '@/ui'
import { useRouter } from 'next/navigation'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import Image from '@/components/ui/Image'
import { IBooking } from '@/modules/profile/queries/fetchProfile'
import dayjs from '@/libs/dayjs'

export interface HotelCardProps {
  booking: IBooking
}
export default function BookingCard({ booking }: HotelCardProps) {
  const router = useRouter()
  return (
    <Card
      hoverable
      className="sm:w-full md:w-[300px]"
      cover={
        <Image
          style={{ height: '280px', width: '100%', objectFit: 'cover' }}
          src={booking.hotel.previewImage.url}
          alt={booking.hotel.previewImage.name}
        />
      }
      onClick={() => router.push(`/hotel/${booking.hotel.uid}`)}
    >
      <Row gutter={[8, 8]}>
        <Col xs={24}>
          <Row gutter={[16, 16]} justify="space-between">
            <Col>{booking.hotel.title}</Col>
            <Col>
              <ReviewsStar rating={booking.hotel.reviewCount} className="mr-2" />
              <span className="ml-2">({booking.hotel.reviewRating})</span>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <div>
            {dayjs(booking.startDate).format('DD.MM.YYYY')} - {dayjs(booking.endDate).format('DD.MM.YYYY')}
          </div>
          <div>{booking.guests} гостей</div>
          <div>{booking.days} дней</div>
        </Col>
        <Col xs={24}>
          <div>{booking.price} Р</div>
        </Col>
      </Row>
    </Card>
  )
}
