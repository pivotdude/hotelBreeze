import { ShareAltOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space } from 'antd'
import DotList from '@/components/ui/Dot/DotList'
import { useState } from 'react'
import FollowIcon from '@/components/ui/FollowIcon/FollowIcon'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import ReviewCount from '@/components/ui/Review/ReviewCount'

export interface IHotelInfo {
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
  city: {
    name: string
    country: {
      name: string
    }
  }
}

interface HotelInfoProps {
  hotel: IHotelInfo
}
function FollowButton({ isFollow, onClick }: { isFollow: boolean; onClick: () => void }) {
  return (
    <Button
      type={isFollow ? 'primary' : 'default'}
      shape="round"
      icon={<FollowIcon isFollowed={isFollow} />}
      size="large"
      onClick={onClick}
    >
      {isFollow ? 'Following' : 'Follow'}
    </Button>
  )
}

export default function HotelCup({ hotel }: HotelInfoProps) {
  const [isFollow, setIsFollow] = useState<boolean>(false)
  const toggleFollow = () => setIsFollow((prev) => !prev)

  return (
    <Row justify="space-between" className="items-center">
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
            Share
          </Button>
          <FollowButton onClick={toggleFollow} isFollow={isFollow} />
        </Space>
      </Col>
    </Row>
  )
}
