import { Col, Row, Space } from 'antd'
import Link from 'next/link'
import { ReactNode } from 'react'

function Title({ children }: { children: ReactNode }) {
  return <p className="font-bold text-md leading-normal">{children}</p>
}

export default function FooterLinks() {
  return (
    <Row>
      <Col xs={6}>
        <Space direction="vertical" size={14}>
          <Title>Support</Title>
          <Link href="/">Help center</Link>
          <Link href="/">Safety information</Link>
          <Link href="/">Cancellation options</Link>
          <Link href="/">Our COVID-19 Response</Link>
          <Link href="/">Supporting people with disabilities</Link>
          <Link href="/">Report a neighbourhood</Link>
        </Space>
      </Col>
      <Col xs={6}>
        <Space direction="vertical" size={14}>
          <Title>Community</Title>
          <Link href="/">Airbnb.org: disaster relief housing</Link>
          <Link href="/">Support: Afghan refugees</Link>
          <Link href="/">Combating discriminatino</Link>
        </Space>
      </Col>
      <Col xs={6}>
        <Space direction="vertical" size={14}>
          <Title>Hosting</Title>
          <Link href="/">Try hosting</Link>
          <Link href="/">AirCover: protection for Hosts</Link>
          <Link href="/">Explore hosting resources</Link>
          <Link href="/">Visit our community forum</Link>
          <Link href="/">How to host responsibly</Link>
        </Space>
      </Col>
      <Col xs={6}>
        <Space direction="vertical" size={14}>
          <Title>About</Title>
          <Link href="/">Newsroom</Link>
          <Link href="/">Learn about new features</Link>
          <Link href="/">Explore hosting resources</Link>
          <Link href="/">Careers</Link>
        </Space>
      </Col>
    </Row>
  )
}
