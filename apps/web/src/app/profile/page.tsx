import { Button, Col, Row } from '@/ui'
import { fetchProfile } from '@/modules/profile/queries/fetchProfile'
import Title from '@/ui/Title'
import { Hotel } from '@/modules/bookig/queries/fetchHotels'
import HotelList from '@/modules/bookig/components/Hotel/HotelList'
import authGateServer from '@/gate/authGate'
import EditProfileForm from '@/components/app/forms/EditProfileForm'

export default async function Profile() {
  await authGateServer()
  const rawProfile = await fetchProfile()

  if (!rawProfile) {
    return <p>Профиля нету</p>
  }
  const profile = rawProfile.profile
  const favorites = profile.favorites
  const hotels = favorites.flatMap((favorite: { hotel: Hotel[] }) => favorite.hotel)
  console.log(hotels)

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
      <Col span={4}>
        <Button>Edit profile</Button>
      </Col>
      <Col span={24}>
        <EditProfileForm />
      </Col>
      <Col xs={24}>
        <Title level={3}>Избранное</Title>
        {hotels?.length ? (
          <div className="flex flex-wrap gap-3">
            <HotelList hotels={hotels} />
          </div>
        ) : (
          <div>Отелей нет</div>
        )}
      </Col>
    </Row>
  )
}
