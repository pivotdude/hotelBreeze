import React from 'react'
import constants from '@/constants'

interface ImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

export default function Image(props: ImageProps) {
  return (
    <img
      width={props.width}
      height={props.height}
      className={props.className}
      alt={props.alt}
      style={props.style}
      src={constants.BACKEND_URL + props.src}
    />
  )
}
