'use client'
import type { StatisticProps } from 'antd'
import { Statistic as StatisticAntd } from 'antd'

export default function Statistic(props: StatisticProps) {
  return <StatisticAntd {...props} />
}
