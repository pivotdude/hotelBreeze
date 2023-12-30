'use client'
import { Avatar, Col, Divider, Row, Typography } from 'antd'
import { IHotel } from '@/components/app/booking/Hotel/HotelCard'
import HotelGallery from '@/components/app/hotel/Gallery/HotelGallery'
import HotelInfo from '@/components/app/hotel/HotelInfo'
import HotelDopInfoList from '@/components/app/booking/Hotel/HotelDopInfoList'
import BookingForm from '@/components/app/hotel/BookingForm'

interface HotelPageProps {
  params: {
    id: string
  }
  searchParams: {
    [key: string]: string
  }
}
const hotel = {
  id: 4,
  title: 'Hotel 1',
  src: 'https://placehold.co/600x400',
  description: 'Description',
  address: 'Address',
  country: {
    name: 'Angola',
  },
  city: 'City',
  price: 100,
  reviews: {
    rating: 3,
    count: 10,
  },
  data: {
    guests: '1-10',
    isEntireHome: true,
    rooms: {
      beds: 5,
      bath: 3,
      extras: ['Wifi', 'Kitchen', 'Free Parking'],
    },
  },
} as IHotel

export default function HotelPage({ params, searchParams }: HotelPageProps) {
  return (
    <Row gutter={[16, 16]} className="px-32 py-8">
      <Col xs={24}>
        <Typography.Title className="mb-0">{hotel.title}</Typography.Title>
      </Col>
      <Col xs={24}>
        <HotelInfo hotel={hotel} />
      </Col>
      <Col xs={24}>
        <HotelGallery />
      </Col>
      <Col xs={24}>
        <Row justify="space-between">
          <Col>
            <p>Hostet by my</p>
            <HotelDopInfoList hotel={hotel} />
          </Col>
          <Col>
            <Avatar
              src="https://i.pinimg.com/736x/22/6f/fb/226ffb62d48c9db63c563ff82e472b8c.jpg"
              size={48}
            />
          </Col>
          <Divider type="horizontal" />
        </Row>
        {/*<Row justify="space-between" gutter={[32, 32]}>*/}
        {/*  <Col span={14}>*/}
        {/*    <Row justify="space-between">*/}

        {/*    </Row>*/}
        {/*  </Col>*/}
        {/*  <Col span={10}>*/}
        {/*    <Card className="w-full">*/}
        {/*      <BookingForm />*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Col>
      <Col xs={24}>
        <BookingForm />
      </Col>
    </Row>
  )
}
