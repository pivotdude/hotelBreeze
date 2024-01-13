import { StarOutlined } from '@ant-design/icons'

interface ReviewsPanelProps {
  rating: number | string
}

export default function ReviewsStar({ rating }: ReviewsPanelProps) {
  return (
    <>
      <StarOutlined className="text-pink-400" />
      <g>{rating}</g>
    </>
  )
}
