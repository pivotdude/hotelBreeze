import { StarFilled } from '@ant-design/icons'

interface ReviewsPanelProps {
  rating: number | string
  className?: string
}

export default function ReviewsStar({ rating, className }: ReviewsPanelProps) {
  return (
    <>
      <StarFilled />
      <a className={'ml-1 text-black hover:text-black'}>{rating}</a>
    </>
  )
}
