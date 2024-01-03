'use client'
import Meta from 'antd/es/card/Meta'
import { Card } from 'antd'

export interface InfoCardProps {
  src: string
  title: string
  description: string
  width?: number
}

export default function InfoCard(props: InfoCardProps) {
  return (
    <Card
      hoverable
      style={{
        width: props.width,
      }}
      cover={
        <img alt={props.title} src={props.src} /> // TODO change on Image
      }
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  )
}
