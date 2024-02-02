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
    <Row gutter={[16, 16]}>
      <Col xs={24} className="my-20 m-auto">
        <SearchForm countries={countries} />
      </Col>
      {hotels?.length ? (
        <Col xs={24}>
          <div className="flex flex-wrap gap-3">
            <HotelList hotels={hotels} />
          </div>
        </Col>
      ) : (
        <div>Отелей нет</div>
      )}
    </Row>
  )
}
