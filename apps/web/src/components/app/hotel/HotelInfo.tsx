import { ShareAltOutlined, StarOutlined } from '@ant-design/icons'
import { IHotel } from '@/components/app/booking/Hotel/HotelCard'
import { Button, Col, Row, Space } from 'antd'
import DotList from '@/components/ui/Dot/DotList'
import { useState } from 'react'
import FollowIcon from '@/components/ui/FollowIcon/FollowIcon'

interface HotelInfoProps {
  hotel: IHotel
}
function FollowButton({
  isFollow,
  onClick,
}: {
  isFollow: boolean
  onClick: () => void
}) {
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

export default function HotelInfo({ hotel }: HotelInfoProps) {
  const [isFollow, setIsFollow] = useState<boolean>(false)
  const toggleFollow = () => setIsFollow((prev) => !prev)

  return (
    <Row justify="space-between" className="items-center">
      <Col>
        <DotList>
          <>
            <StarOutlined className="text-pink-400" />
            <g>{hotel.reviews.rating}</g>
          </>
          <u>{hotel.reviews.count} reviews</u>
          <g>Syper</g>
          <u>Bordeaux, France</u>
        </DotList>
      </Col>
      <Col>
        <Space direction="horizontal" size={6}>
          <Button
            icon={<ShareAltOutlined />}
            className="text-black"
            shape="round"
            size="large"
          >
            Share
          </Button>
          <FollowButton onClick={toggleFollow} isFollow={isFollow} />
        </Space>
      </Col>
    </Row>
  )
}
