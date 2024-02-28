import { IHotel } from '@/modules/hotel/queries/fetchHotel'
import { Col, Row, Space } from '@/ui'

interface HotelDopInfoListProps {
  hotel: IHotel
}

export default function HotelDopInfoList({ hotel }: HotelDopInfoListProps) {
  return (
    <Row gutter={[16, 16]}>
      <Col>
        <p>{hotel.data.rooms.bath} ванн</p>
      </Col>
      <Col>
        <p>{hotel.data.rooms.beds} кроватей</p>
      </Col>
      <Col>
        <p>до {hotel.data.maxGuests} гостей</p>
      </Col>
      <Col>
        <Space direction="horizontal" size={6}>
          {hotel.data.rooms.extras.map((item) => (
            <p key={item} className="m-0 ">
              {item}
            </p>
          ))}
        </Space>
      </Col>
    </Row>
  )
}
