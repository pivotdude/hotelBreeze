import { Col, Row, Space } from '@/ui'
import { ReactNode } from 'react'
import Link from '@/components/app/Link'

function Title({ children }: { children: ReactNode }) {
  return <p className="font-bold text-md leading-normal">{children}</p>
}

export default function FooterLinks() {
  return (
    <Row gutter={[32, 32]} className="w-full" justify="space-between">
      <Col xs={24} md={12} xxl={6}>
        <Space direction="vertical" size={14}>
          <Title>Support</Title>
          <p>Phone: +7 (912) 123-12-12</p>
          <p>VK: HotelBrrze</p>
          <p>TG: HotelBrrze</p>
          <p>YouTube: HotelBrrze</p>
        </Space>
      </Col>
      <Col xs={24} md={12} xxl={6}>
        <Space direction="vertical" size={14}>
          <Title>Hosting</Title>
          <Link href="/booking/">Booking</Link>
          <Link href="/profile/">Profile</Link>
        </Space>
      </Col>
    </Row>
  )
}
