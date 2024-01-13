'use client'
import type { RowProps } from 'antd'
import { Row as AntdRow } from 'antd'

export default function Column(props: RowProps) {
  return <AntdRow {...props}></AntdRow>
}
