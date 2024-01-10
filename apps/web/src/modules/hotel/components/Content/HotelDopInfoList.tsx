import DotList from '@/components/ui/Dot/DotList'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'

interface HotelDopInfoListProps {
  hotel: IHotel
}

export default function HotelDopInfoList({ hotel }: HotelDopInfoListProps) {
  return (
    <DotList>
      <p>{hotel.data.rooms.bath} ван</p>
      <p>{hotel.data.rooms.beds} кроватей</p>
      <p>до {hotel.data.maxGuests} гостей</p>
      {hotel.data.rooms.extras.map((item) => (
        <p key={item} className="m-0">
          {item}
        </p>
      ))}
    </DotList>
  )
}
