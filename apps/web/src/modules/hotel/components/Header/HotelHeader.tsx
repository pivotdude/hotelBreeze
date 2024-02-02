import HotelCup from '@/modules/hotel/components/Header/HotelCup'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'
import { Title } from '@/ui'

interface HotelHeaderProps {
  hotel: IHotel
}

export default function HotelHeader({ hotel }: HotelHeaderProps) {
  return (
    <>
      <Title className="mb-0">{hotel.title}</Title>
      <HotelCup hotel={hotel} />
    </>
  )
}
