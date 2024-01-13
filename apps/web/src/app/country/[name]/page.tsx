import { Row } from 'antd'

interface CountryPageProps {
  params: {
    name: string
  }
}
export default function CountrзyPage({ params }: CountryPageProps) {
  return (
    <Row gutter={[64, 64]} className="px-32">
      {params.name}
    </Row>
  )
}
