import { Card, Col, Row } from '@/ui'
import { fetchProfile } from '@/modules/profile/queries/fetchProfile'
import Image from '@/components/ui/Image'
import Title from '@/ui/Typography'

export default async function Profile() {
  // const session: any = await getServerSession(authOptions)
  const rawProfile = await fetchProfile()

  if (!rawProfile) {
    return <p>Профиля нету</p>
  }
  const profile = rawProfile.profile

  return (
    <Row gutter={[64, 64]} className="py-4">
      <Col xs={24} className="w-full">
        <pre>{JSON.stringify(profile, null, 2)}</pre>
        <Card
          bordered
          className="relative"
          cover={
            <Image
              src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613216205_166-p-foni-sinie-abstraktnie-210.jpg"
              alt="wasd"
              className="h-72 object-cover "
            />
          }
        >
          <div className="absolute bottom-2 left-4">
            <img className="w-40 h-40 rounded-full" src="https://via.placeholder.com/160x160" />
          </div>
          <div className="mx-48">
            <Title>{profile.name}</Title>
          </div>
        </Card>
      </Col>
      <Col xs={24}>
        <Title level={3}>Избранное</Title>
      </Col>
    </Row>
  )
}
