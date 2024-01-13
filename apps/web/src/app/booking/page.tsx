import { Col, Row } from '@/ui'
import HotelList from '@/modules/bookig/components/Hotel/HotelList'
import SearchForm from '@/modules/bookig/components/SearchForm'
import { fetchCountries } from '@/modules/bookig/queries/fetchCountry'
import { fetchHotels } from '@/modules/bookig/queries/fetchHotels'

export default async function Page() {
  const rawCountries = await fetchCountries()
  const countries = rawCountries ? rawCountries.countries : []

  const rawHotels = await fetchHotels()
  const hotels = rawHotels ? rawHotels?.hotels : []

  console.log('hotels', hotels)

  return (
    <Row gutter={[16, 16]} className="px-32">
      <Col xs={24}>
        <SearchForm countries={countries} />
      </Col>
      {hotels?.length ? (
        <Col xs={24}>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-2">
            <HotelList hotels={hotels} />
          </div>
        </Col>
      ) : (
        <div>Отелей нет</div>
      )}
    </Row>
  )
}
