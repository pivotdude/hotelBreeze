'use client'
import { Col as AntdCol, ColProps } from 'antd'

export default function Col(props: ColProps) {
  return <AntdCol {...props}>{props.children}</AntdCol>
}
