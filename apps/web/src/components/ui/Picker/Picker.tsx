'use client'
import { Typography } from 'antd'
import CardList from '@/components/ui/InfoCard/CardList'
import { InfoCardProps } from '@/components/ui/InfoCard/InfoCard'

interface PickerProps {
  title: string
  items: InfoCardProps[]
}

export default function Picker(props: PickerProps) {
  return (
    <>
      <Typography.Title level={3}>{props.title}</Typography.Title>
      <div className="grid xxl:grid-cols-6 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-2 gap-2">
        <CardList items={props.items} />
      </div>
    </>
  )
}
