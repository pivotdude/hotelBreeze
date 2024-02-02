import React from 'react'
import constants from '@/constants'

interface ImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export default function Image(props: ImageProps) {
  return <img className={props.className} alt={props.alt} style={props.style} src={constants.BACKEND_URL + props.src} />
}
