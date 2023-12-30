import HotelImage from '@/components/app/hotel/Gallery/HotelImage'

interface BigHotelImageProps {
  alt: string
  src: string
}

export default function BigHotelItem(props: BigHotelImageProps) {
  return (
    <div className="row-span-2 w-full col-span-2">
      <HotelImage alt={props.alt} src={props.src} />
    </div>
  )
}
