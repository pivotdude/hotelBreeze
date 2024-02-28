'use client'
import type { ResultProps } from 'antd'
import { Result as ResultAntd } from 'antd'

export default function Result(props: ResultProps) {
  return <ResultAntd {...props} />
}
