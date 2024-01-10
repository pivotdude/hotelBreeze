'use client'
import { Card, Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { trimText } from '@/helpers/utils'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import Image from '@/components/ui/Image'

export interface IHotel {
  id: number
  title: string
  src: string
  description: string
  address: string
  country: {
    name: string
  }
  city: string
  price: number
  reviews: {
    rating: number
    count: number
  }
  data: {
    guests: string
    isEntireHome: boolean
    rooms: {
      beds: number
      bath: number
      extras: string[]
    }
  }
}

export interface IHotelCard {
  uid: string
  price: number
  description: string
  title: string
  reviewRating: number
  reviewCount: number
  previewImage: {
    url: string
    name: string
  }
}

export interface HotelCardProps {
  hotel: IHotelCard
}
export default function HotelCard({ hotel }: HotelCardProps) {
  const router = useRouter()
  const id = 1
  return (
    <Card
      hoverable
      style={{
        width: '380px',
      }}
      cover={<Image src={hotel.previewImage.url} alt={hotel.previewImage.name} />}
      onClick={() => router.push(`/hotel/${hotel.uid}`)}
    >
      <Row gutter={[8, 8]}>
        <Col xs={24}>
          <Row gutter={[16, 16]} justify="space-between">
            <Col>{hotel.title}</Col>
            <Col>
              <ReviewsStar rating={hotel.reviewCount} />
              <span className="ml-2">({hotel.reviewRating})</span>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <div>{trimText(hotel.description, 100)}</div>
        </Col>
        <Col xs={24}>
          <div>{hotel.price} Р за ночь</div>
        </Col>
      </Row>
    </Card>
  )
}