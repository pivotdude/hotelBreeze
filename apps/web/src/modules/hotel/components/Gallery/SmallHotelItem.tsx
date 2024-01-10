import HotelImage from './HotelImage'

interface SmallHotelImageProps {
  alt: string
  src: string
}

export default function SmallHotelItem(props: SmallHotelImageProps) {
  return (
    <span className="col-span-1">
      <HotelImage alt={props.alt} src={props.src} small={true} />
    </span>
  )
}
