import MiniBanner from '@/components/ui/Banners/MiniBanner'
import { Col, Row } from '@/ui'

export default function DiscoverBanner() {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={8}>
        <MiniBanner
          title="Things to do on your trip"
          buttonText="Experiences"
          onClick={() => {}}
          src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1704067200&Signature=g6UhhIqw-CNn-pKKs3LuBYFHfhUgcxAkeHJ02Is765YUdJY03yKo2r~A4oOmRvEgOMHfOatoG1K5Dqw7LDL1m2CBjCl~3NDdq5NgPKZX4Ljr3-uX1jmoOiZgb-6wX-WClQYQo1CNIJ3UnHbRzS49g9f3~ksk5ER8IU7W6QdNT-W3o~ZR5GGo4FlzumqX7nI-6lqx2CXilMNxzLrEG2OuTyuqFjjhjui1vRMNv3Wj408Jd9wngW-hKUeX2RFckOVrbKxJQkHA70nb-fhNncgotCDme4FTgdile05UqU9VuD06GBOdtu2ladiwa0uPHpnwQrDigkKeW5Y5HtSN9xurAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </Col>
      <Col xs={24} sm={8}>
        <MiniBanner
          title="Things to do on your trip"
          buttonText="Experiences"
          onClick={() => {}}
          src="https://images.unsplash.com/photo-1557683316-973673baf926"
        />
      </Col>
      <Col xs={24} sm={8}>
        <MiniBanner
          title="Things to do on your trip"
          buttonText="Experiences"
          onClick={() => {}}
          src="https://images.unsplash.com/photo-1557683316-973673baf926"
        />
      </Col>
    </Row>
  )
}
