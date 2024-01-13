'use client'
import { Avatar, Col, Divider, Row, Typography } from 'antd'
import HotelDopInfoList from './HotelDopInfoList'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'

interface HotelContentProps {
  hotel: IHotel
}

export default function HotelInfo({ hotel }: HotelContentProps) {
  return (
    <>
      <Row justify="space-between">
        <Col className="flex items-center">
          <HotelDopInfoList hotel={hotel} />
        </Col>
        <Col>
          <Avatar src="https://i.pinimg.com/736x/22/6f/fb/226ffb62d48c9db63c563ff82e472b8c.jpg" size={48} />
        </Col>
      </Row>
      <Divider type="horizontal" />
      <Typography.Text>{hotel.description}</Typography.Text>
    </>
  )
}
