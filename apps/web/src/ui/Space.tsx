'use client'
import type { SpaceProps } from 'antd'
import { Space as SpaceAntd } from 'antd'

export default function Space(props: SpaceProps) {
  return <SpaceAntd {...props}>{props.children}</SpaceAntd>
}
