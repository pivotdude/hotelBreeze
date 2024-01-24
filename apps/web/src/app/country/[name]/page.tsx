import { Row } from 'antd'

interface CountryPageProps {
  params: {
    name: string
  }
}
export default function CountryPage({ params }: CountryPageProps) {
  return <Row gutter={[64, 64]}>{params.name}</Row>
}
