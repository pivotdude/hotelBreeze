'use client'
import { Row as AntdRow, RowProps } from 'antd'

export default function Col(props: RowProps) {
  return <AntdRow {...props}>{props.children}</AntdRow>
}
