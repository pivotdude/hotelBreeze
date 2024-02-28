import BigHotelItem from './BigHotelItem'
import SmallHotelList, { IImage } from '@/modules/hotel/components/Gallery/SmallHotelList'

interface HotelGalleryProps {
  previewImage: {
    url: string
    name: string
  }
  images: IImage[]
}

export default function HotelGallery(props: HotelGalleryProps) {
  return (
    <>
      <div
        className="grid grid-cols-5 gap-4"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          columnGap: '0.5rem',
          rowGap: '0.3rem',
        }}
      >
        <BigHotelItem alt={props.previewImage.name} src={props.previewImage.url} />
        <>
          <SmallHotelList images={props.images} />
        </>
      </div>
    </>
  )
}
