'use client'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'

export default function Avatar(props: AvatarProps) {
  return <AntdAvatar {...props}>{props.children}</AntdAvatar>
}
