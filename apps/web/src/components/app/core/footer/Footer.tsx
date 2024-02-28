import { Col, Divider, Row } from '@/ui'
import FooterLinks from '@/components/app/core/footer/FooterLinks'

export default function Footer() {
  return (
    <Row className="bg-gray-50 py-4">
      <Col xs={24} className="pt-16 pb-8 flex justify-between w-full">
        <FooterLinks />
      </Col>
      <Divider type="horizontal" className="bg-gray-600" />
      <Col xs={24} className="flex space-x-2">
        <p>© 2022 HotelBreeze</p>
      </Col>
    </Row>
  )
}
