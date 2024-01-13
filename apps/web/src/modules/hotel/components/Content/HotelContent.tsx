import { Col, Row } from '@/ui'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'
import ReserveCard from '@/modules/hotel/components/Content/ReserveCard'
import HotelInfo from '@/modules/hotel/components/Content/HotelInfo'

interface HotelInfoProps {
  hotel: IHotel
}

export default function HotelContent({ hotel }: HotelInfoProps) {
  return (
    <Row gutter={[64, 64]} justify="space-between">
      <Col xs={16}>
        <HotelInfo hotel={hotel} />
      </Col>
      <Col xs={8}>
        <ReserveCard
          price={hotel.price}
          maxGuests={hotel.data.maxGuests}
          reviewCount={hotel.reviewCount}
          reviewRating={hotel.reviewRating}
        />
      </Col>
    </Row>
  )
}
