'use client'
import type { TitleProps as TitleAntdProps } from 'antd/es/typography/Title'
import { Typography as TypographyAntd } from 'antd'

interface TitleProps extends TitleAntdProps {
  children: React.ReactNode
}

export default function Title({ children, ...otherProps }: TitleProps) {
  return <TypographyAntd.Title {...otherProps}>{children}</TypographyAntd.Title>
}
