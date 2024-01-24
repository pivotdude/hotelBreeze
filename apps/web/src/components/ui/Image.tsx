import React from 'react'
import constants from '@/constants'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

export default function Image(props: ImageProps) {
  return <img className={props.className} alt={props.alt} src={constants.BACKEND_URL + props.src} />
}
