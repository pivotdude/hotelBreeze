import HotelCard, { IHotel } from '@/components/app/booking/Hotel/HotelCard'

interface HotelListProps {
  hotels: IHotel[]
}

export default function HotelList({ hotels }: HotelListProps) {
  return (
    <>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </>
  )
}
