
'use client'
import { Carousel as AntdCarousel, CarouselProps } from 'antd'

export default function Col(props: CarouselProps) {
  return <AntdCarousel {...props}>{props.children}</AntdCarousel>
}
