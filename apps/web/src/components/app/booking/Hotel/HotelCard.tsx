import { Card, Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { StarFilled } from '@ant-design/icons'
import { trimText } from '@/helpers/utils'

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
    <Card
      bordered={true}
      style={{
        width: '380px',
      }}
      cover={
        <img
          src="https://imgs.search.brave.com/2ZW4UwyX7JuMUjBWs92yMAFTko98GxRRug6ZjJIicWo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/NjIxNTk1Mi9waG90/by9idXNpbmVzcy1o/b3RlbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WWFPVnQ4/OEVMa2JGQTFic2E0/bndqMUZER1p4WWda/d1JkdlFyc2VhY1lB/cz0"
          alt=""
        />
      }
    >
      <Row gutter={[8, 8]}>
        <Col xs={24}>
          <Row gutter={[16, 16]} justify="space-between">
            <Col>{hotel.title}</Col>
            <Col>
              <StarFilled />
              <span className="ml-[120] mr-1.5">{hotel.reviews.rating}</span>
              <span>({hotel.reviews.rating})</span>
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
