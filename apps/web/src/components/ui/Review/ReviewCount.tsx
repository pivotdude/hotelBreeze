interface ReviewCountProps {
  count: number | string
}

export default function ReviewCount({ count }: ReviewCountProps) {
  return <p>{count} отзывов</p>
}
