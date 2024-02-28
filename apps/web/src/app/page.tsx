import { Col, Row, Title } from '@/ui'
import { fetchCountries } from '@/modules/main/queries/fetchCountries'
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
        <Title level={3}>Страны</Title>
        <div className="flex flex-wrap gap-3">
          <CardList items={countries} href="/booking?country=" />
        </div>
      </Col>
    </Row>
  )
}
