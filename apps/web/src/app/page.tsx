import { Col, Row } from '@/ui'
import image from '@/modules/main/source/card.png'
import Image from 'next/image'
import { fetchCountries } from '@/modules/main/queries/fetchCountries'
import GridCardList from '@/components/ui/InfoCard/GridCardList'
import DiscoverBanner from '@/modules/main/components/DiscoverBanner'

export default async function Home() {
  const rawCountries = await fetchCountries()
  const countries = rawCountries ? rawCountries.countries : []

  if (!countries) {
    return null
  }

  return (
    <Row gutter={[64, 64]} className="px-32">
      <Col xs={24}>
        <div className="bg-sky-300">
          <Image alt="ss" src={image} />
        </div>
      </Col>

      <Col xs={24}>
        <GridCardList items={countries} title="Страны" href="/country" />
      </Col>
      <Col xs={24}>
        <DiscoverBanner />
      </Col>
    </Row>
  )
}
