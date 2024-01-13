import HotelImage from '@/modules/hotel/components/Gallery/HotelImage'

interface BigHotelImageProps {
  alt: string
  src: string
}

export default function BigHotelItem(props: BigHotelImageProps) {
  return (
    <span className="w-full" style={{ gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 3 }}>
      <HotelImage alt={props.alt} src={props.src} />
    </span>
  )
}
