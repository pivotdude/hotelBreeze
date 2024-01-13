import { Col, Row } from '@/ui'
import { fetchHotel } from '@/modules/hotel/queries/fetchHotel'
import HotelHeader from '@/modules/hotel/components/Header/HotelHeader'
import HotelGallery from '@/modules/hotel/components/Gallery/HotelGallery'
import HotelContent from '@/modules/hotel/components/Content/HotelContent'

interface HotelPageProps {
  params: {
    uid: string
  }
  searchParams: {
    [key: string]: string
  }
}
export default async function HotelPage({ params, searchParams }: HotelPageProps) {
  const rawHotel = await fetchHotel(params.uid)
  const hotel = rawHotel ? rawHotel.hotel : null

  if (!hotel) {
    return null
  }

  return (
    <Row gutter={[16, 16]} className="px-32 py-8">
      <Col xs={24}>
        <HotelHeader hotel={hotel} />
      </Col>
      <Col xs={24}>
        <HotelGallery previewImage={hotel.previewImage} images={hotel.images} />
      </Col>
      <Col xs={24}>
        <HotelContent hotel={hotel} />
      </Col>
    </Row>
  )
}
