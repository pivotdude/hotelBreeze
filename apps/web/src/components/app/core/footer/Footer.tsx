import { Col, Divider, Row } from 'antd'
import FooterLinks from '@/components/app/core/footer/FooterLinks'
import DotList from '@/components/ui/Dot/DotList'
import Link from 'next/link'

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Row className="bg-gray-50 py-4">
      <Col xs={24} className="pt-16 pb-8">
        <FooterLinks />
      </Col>
      <Divider type="horizontal" className="bg-gray-600" />
      <Col xs={24}>
        <DotList>
          <Link href="/">© 2022 HotelBreeze</Link>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Sitemap</Link>
        </DotList>
      </Col>
    </Row>
  )
}
