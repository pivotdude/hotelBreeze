import { Col, Row } from '@/ui'
import { fetchProfile } from '@/modules/profile/queries/fetchProfile'
import Title from '@/ui/Title'
import { Hotel } from '@/modules/bookig/queries/fetchHotels'
import HotelList from '@/modules/bookig/components/Hotel/HotelList'
import authGateServer from '@/gate/authGate'
import BookingList from '@/modules/profile/components/booking/BookingList'

export default async function Profile() {
  await authGateServer()
  const rawProfile = await fetchProfile()

  if (!rawProfile) {
    return <p>Профиля нету</p>
  }
  const profile = rawProfile.profile
  const favorites = profile.favorites
  const bookings = profile.bookings
  const favoritesHotels = favorites.flatMap((favorite: { hotel: Hotel[] }) => favorite.hotel)

  return (
    <Row gutter={[64, 64]} className="py-4 items-center">
      <Col xs={24}>
        <Row className="items-center flex justify-center md:justify-start" gutter={[16, 16]}>
          <Col>
            <img className="w-40 h-40 rounded-full" src="https://via.placeholder.com/160x160" />
          </Col>
          <Col>
            <Title>{profile.name}</Title>
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <Title level={3}>Избранное</Title>
        {favoritesHotels?.length ? (
          <div className="flex flex-wrap gap-3">
            <HotelList hotels={favoritesHotels} />
          </div>
        ) : (
          <div>Отели отсутствуют</div>
        )}
      </Col>
      <Col xs={24}>
        <Title level={3}>Забранированные</Title>
        {bookings?.length ? (
          <div className="flex flex-wrap gap-3">
            <BookingList bookings={bookings} />
          </div>
        ) : (
          <div>Отели отсутствуют</div>
        )}
      </Col>
    </Row>
  )
}
