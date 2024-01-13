import React from 'react'
import constants from '@/constants'

interface ImageProps {
  src: string
  alt: string
}

export default function Image(props: ImageProps) {
  return <img alt={props.alt} src={constants.BACKEND_URL + props.src} />
}
