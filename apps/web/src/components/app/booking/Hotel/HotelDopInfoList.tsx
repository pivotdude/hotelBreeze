import DotList from '@/components/ui/Dot/DotList'
import { IHotel } from '@/components/app/booking/Hotel/HotelCard'

interface HotelDopInfoListProps {
  hotel: IHotel
}

export default function HotelDopInfoList({ hotel }: HotelDopInfoListProps) {
  return (
    <DotList>
      <p>{hotel.data.rooms.bath} ван</p>
      <p>{hotel.data.rooms.beds} кроватей</p>
      {hotel.data.rooms.extras.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </DotList>
  )
}
