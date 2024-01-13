'use client'
import type { DividerProps } from 'antd'
import { Divider as AntdDivider } from 'antd'

export default function Divider(props: DividerProps) {
  return <AntdDivider {...props}>{props.children}</AntdDivider>
}
