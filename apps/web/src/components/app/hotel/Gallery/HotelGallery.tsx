import BigHotelItem from '@/components/app/hotel/Gallery/BigHotelItem'
import SmallHotelItem from '@/components/app/hotel/Gallery/SmallHotelItem'

interface HotelGalleryProps {}

export default function HotelGallery(props: HotelGalleryProps) {
  const mockHotel = {
    src: 'https://hotels.sletat.ru/i/f/25910_37.jpg',
    alt: 'Hotel',
  }
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-5 gap-4">
        <BigHotelItem alt={mockHotel.alt} src={mockHotel.src} />
        <>
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
          <SmallHotelItem alt={mockHotel.alt} src={mockHotel.src} />
        </>
      </div>
    </>
  )
}
