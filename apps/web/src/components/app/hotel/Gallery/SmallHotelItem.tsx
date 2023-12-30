import HotelImage from '@/components/app/hotel/Gallery/HotelImage'

interface SmallHotelImageProps {
  alt: string
  src: string
}

export default function SmallHotelItem(props: SmallHotelImageProps) {
  return (
    <div className="col-span-1">
      <HotelImage alt={props.alt} src={props.src} />
    </div>
  )
}
