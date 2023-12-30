import { HeartFilled, HeartOutlined } from '@ant-design/icons'

interface FollowIconProps {
  isFollowed: boolean
}

function FollowedIcon() {
  return <HeartFilled />
}

function UnFollowedIcon() {
  return <HeartOutlined />
}

export default function FollowIcon({ isFollowed }: FollowIconProps) {
  return isFollowed ? <FollowedIcon /> : <UnFollowedIcon />
}
