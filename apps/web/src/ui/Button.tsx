'use client'
import { Button as AntdButton, ButtonProps } from 'antd'

export default function Button(props: ButtonProps) {
  return <AntdButton {...props}>{props.children}</AntdButton>
}
