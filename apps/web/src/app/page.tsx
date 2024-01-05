import { Col, Row } from 'antd'
import image from '@/modules/main/source/card.png'
import Image from 'next/image'
import DiscoverBanner from '@/modules/main/components/DiscoverBanner'
import { fetchCountries } from '@/modules/main/queries/fetchCountries'
import GridCardList from '@/components/ui/InfoCard/GridCardList'

export default async function Home() {
  const countries = await fetchCountries()
  // console.log(countries.countries[0].previewImage)

  return (
    <Row gutter={[64, 64]} className="px-32">
      <Col xs={24}>
        <div className="bg-sky-300">
          <Image alt="ss" src={image} />
          {/*<source className="object-cover h-[720px] w-full" src={image} />*/}
        </div>
      </Col>

      <Col xs={24}>
        <GridCardList items={countries.countries} title="Страны" href="/country" />
      </Col>
      <Col xs={24}>
        <DiscoverBanner />
      </Col>
    </Row>
  )
}
