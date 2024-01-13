import SmallHotelItem from '@/modules/hotel/components/Gallery/SmallHotelItem'

export interface IImage {
  url: string
  name: string
}

interface SmallHotelListProps {
  images: IImage[]
}

export default function SmallHotelList(props: SmallHotelListProps) {
  return (
    <>
      {props.images.map((image) => (
        <SmallHotelItem key={image.url} alt={image.name} src={image.url} />
      ))}
    </>
  )
}
