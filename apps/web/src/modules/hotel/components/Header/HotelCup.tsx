import { ShareAltOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space } from '@/ui'
import DotList from '@/components/ui/Dot/DotList'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import ReviewCount from '@/components/ui/Review/ReviewCount'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'
import FollowButton from '@/modules/hotel/components/Header/FollowButton'

interface HotelInfoProps {
  hotel: IHotel
}

export default function HotelCup({ hotel }: HotelInfoProps) {
  return (
    <Row justify="space-between" className="items-center" gutter={[16, 16]}>
      <Col>
        <DotList>
          <ReviewsStar rating={hotel.reviewRating} />
          <ReviewCount count={hotel.reviewCount} />
          <u>{hotel.city.name + ', ' + hotel.city.country.name}</u>
        </DotList>
      </Col>
      <Col>
        <Space direction="horizontal" size={6}>
          <Button icon={<ShareAltOutlined />} className="text-black" shape="round" size="large">
            Поделиться
          </Button>
          <FollowButton isFollow={hotel.isFollow} uid={hotel.favorites?.[0]?.uid} hotelUid={hotel.uid} />
        </Space>
      </Col>
    </Row>
  )
}
