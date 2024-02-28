import { IBooking } from '@/modules/profile/queries/fetchProfile'
import BookingCard from '@/modules/profile/components/booking/BookingCard'

interface BookingListProps {
  bookings: IBooking[]
}

export default function BookingList({ bookings }: BookingListProps) {
  return (
    <>
      {bookings.map((booking) => (
        <BookingCard key={booking.uid} booking={booking} />
      ))}
    </>
  )
}
