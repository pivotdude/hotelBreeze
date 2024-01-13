'use client'
import React from 'react'
import { Image } from 'antd'
import constants from '@/constants'

interface ImageProps {
  src: string
  alt: string
  small?: boolean
}

export default function AntdImage(props: ImageProps) {
  const classes = props?.small ? { className: 'object-cover', style: { width: '100%', height: '100%' } } : {}
  return <Image alt={props.alt} src={constants.BACKEND_URL + props.src} {...classes} />
}
