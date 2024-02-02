import ReviewItem, { IReviewItem } from '@/modules/hotel/components/Review/ReviewItem'

interface HotelListProps {
  reviews: IReviewItem[]
}

export default function HotelList({ reviews }: HotelListProps) {
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.uid} review={review} />
      ))}
    </>
  )
}
