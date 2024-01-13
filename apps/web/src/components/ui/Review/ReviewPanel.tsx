import DotList from '@/components/ui/Dot/DotList'
import ReviewsStar from '@/components/ui/Review/ReviewsStar'
import ReviewCount from '@/components/ui/Review/ReviewCount'

interface ReviewPanelProps {
  rating: number | string
  count: number | string
}

export default function ReviewPanel({ rating, count }: ReviewPanelProps) {
  return (
    <DotList>
      <ReviewsStar rating={rating} />
      <ReviewCount count={count} />
    </DotList>
  )
}
