import { Col, Row } from '@/ui'
import { fetchProfile } from '@/modules/profile/queries/fetchProfile'
import Title from '@/ui/Title'
import { Hotel } from '@/modules/bookig/queries/fetchHotels'
import HotelList from '@/modules/bookig/components/Hotel/HotelList'
import authGateServer from '@/gate/authGate'

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
  const bookingsHotels = bookings.flatMap((bookings: { hotel: Hotel[] }) => bookings.hotel)

  return (
    <Row gutter={[64, 64]} className="py-4 items-center">
      <Col xs={20}>
        <Row className="items-center">
          <Col span={4}>
            <img className="w-40 h-40 rounded-full" src="https://via.placeholder.com/160x160" />
          </Col>
          <Col span={12}>
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
        {bookingsHotels?.length ? (
          <div className="flex flex-wrap gap-3">
            <HotelList hotels={bookingsHotels} />
          </div>
        ) : (
          <div>Отели отсутствуют</div>
        )}
      </Col>
    </Row>
  )
}
