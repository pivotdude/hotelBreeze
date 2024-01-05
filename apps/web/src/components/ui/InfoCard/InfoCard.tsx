'use client'
import Meta from 'antd/es/card/Meta'
import { Card } from 'antd'
import { useRouter } from 'next/navigation'

export interface InfoCardItem {
  uid: string
  name: string
  englishName: string
  description: string
  previewImage: {
    url: string
  }
}

export interface InfoCardProps {
  item: InfoCardItem
  href?: string
  width?: number
}

export default function InfoCard({ item, width, href }: InfoCardProps) {
  const router = useRouter()
  return (
    <Card
      hoverable
      style={{
        width,
      }}
      cover={
        <img alt={item.name} src={item?.previewImage?.url} /> // TODO change on Image
      }
      onClick={() => href && router.push(href + '/' + item.englishName)}
    >
      <Meta title={item.name} description={item.description} />
    </Card>
  )
}
