import { StarOutlined } from '@ant-design/icons'

interface ReviewsPanelProps {
  rating: number | string
  className?: string
}

export default function ReviewsStar({ rating, className }: ReviewsPanelProps) {
  return (
    <>
      <StarOutlined className="text-pink-400" />
      <a className={className}>{rating}</a>
    </>
  )
}
