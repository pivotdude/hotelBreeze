import { Image } from 'antd'

interface HotelImageProps {
  alt: string
  src: string
}

export default function HotelImage(props: HotelImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className="h-full max-h-full rounded-lg"
    />
  )
}
