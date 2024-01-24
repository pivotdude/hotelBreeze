import { Col, Row } from '@/ui'

export default function PostsPage() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <div className="grid xxl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-4">
          <p>Посты</p>
        </div>
      </Col>
    </Row>
  )
}
