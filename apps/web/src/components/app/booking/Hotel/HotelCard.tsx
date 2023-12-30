import { Button, Col, Divider, Rate, Row, Space, Typography } from 'antd'
import { ArrowDownOutlined, HeartOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import DotList from '@/components/ui/Dot/DotList'

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
export interface HotelCardProps {
  hotel: IHotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const router = useRouter()
  const id = 1
  return (
    <>
      <Col xs={9}>
        <img src={hotel.src} alt="" className="w-full h-full" />
      </Col>
      <Col xs={15}>
        <Row justify="space-between" className="h-full">
          <Col xs={24}>
            <Typography.Title>{hotel.title}</Typography.Title>
            <Divider type="horizontal" />
            <p>{hotel.description}</p>
            <DotList>
              <p>{hotel.data.rooms.bath} ван</p>
              <p>{hotel.data.rooms.beds} кроватей</p>
              {hotel.data.rooms.extras.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </DotList>
            <Divider type="horizontal" />
          </Col>
          <Col xs={24}>
            <div className="flex items-center">
              <p className="mr-2">{hotel.reviews.rating}</p>
              <Rate disabled value={hotel.reviews.rating} className="mr-2" />
              <p>({hotel.reviews.count} отзывов)</p>
            </div>
          </Col>
          <Col xs={24}>
            <Typography.Title level={4}>315$/ноч</Typography.Title>
          </Col>
          <Col xs={24} className="flex items-end">
            <Space direction="horizontal" size={20}>
              <Button icon={<HeartOutlined />} size="large">
                В избранное
              </Button>
              <Button
                icon={<ArrowDownOutlined />}
                size="large"
                onClick={() => router.push(`/hotel/${id}`)}
              >
                Подробнее
              </Button>
            </Space>
          </Col>
        </Row>
      </Col>
    </>
  )
}
