import { Col, Row } from '@/ui'
import HotelList from '@/modules/bookig/components/Hotel/HotelList'
import SearchForm from '@/modules/bookig/components/SearchForm'
import { fetchCountries } from '@/modules/bookig/queries/fetchCountry'
import { fetchHotels } from '@/modules/bookig/queries/fetchHotels'

export interface BookingPageProps {
  searchParams: {
    country: string
  }
}

export default async function Page({ searchParams }: BookingPageProps) {
  const rawCountries = await fetchCountries()
  const countries = rawCountries ? rawCountries.countries : []

  const rawHotels = await fetchHotels({ country: searchParams.country })
  const hotels = rawHotels ? rawHotels?.hotels : []

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} className="my-10 m-auto">
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
