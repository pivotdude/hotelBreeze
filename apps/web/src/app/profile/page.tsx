import { Card, Col, Row } from 'antd'

export default async function Profile() {
  return (
    <Row gutter={[64, 64]} className="px-32 py-4">
      <Col xs={24}>
        <Card title="Профиль" bordered></Card>
      </Col>
    </Row>
  )
}
