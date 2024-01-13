import HotelCard, { IHotelCard } from '@/modules/bookig/components/Hotel/HotelCard'

interface HotelListProps {
  hotels: IHotelCard[]
}

export default function HotelList({ hotels }: HotelListProps) {
  return (
    <>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.uid} hotel={hotel} />
      ))}
    </>
  )
}
