import { Col, Row, Title } from '@/ui'
import image from '@/modules/main/source/card.png'
import Image from 'next/image'
import { fetchCountries } from '@/modules/main/queries/fetchCountries'
import DiscoverBanner from '@/modules/main/components/DiscoverBanner'
import CardList from '@/components/ui/InfoCard/CardList'

export default async function Home() {
  const rawCountries = await fetchCountries()
  const countries = rawCountries ? rawCountries.countries : []

  if (!countries) {
    return null
  }

  return (
    <Row gutter={[64, 64]}>
      <Col xs={24}>
        <div className="bg-sky-300">
          <Image alt="ss" src={image} />
        </div>
      </Col>

      <Col xs={24}>
        <Title level={3}>Страны</Title>
        <div className="flex flex-wrap gap-3">
          <CardList items={countries} href="/country" />
        </div>
      </Col>
      <Col xs={24}>
        <DiscoverBanner />
      </Col>
    </Row>
  )
}
