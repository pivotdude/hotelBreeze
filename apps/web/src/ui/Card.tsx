'use client'
import { Card as AntdCard, CardProps } from 'antd'

export default function Col(props: CardProps) {
  return <AntdCard {...props}>{props.children}</AntdCard>
}
