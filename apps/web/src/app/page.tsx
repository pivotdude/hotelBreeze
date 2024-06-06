import { AntdImage, Carousel, Col, Row, Title } from '@/ui'
import { fetchCountries } from '@/modules/main/queries/fetchCountries'
import CardList from '@/components/ui/InfoCard/CardList'
import { fetchHotels } from '@/modules/bookig/queries/fetchHotels';
import Image from '@/components/ui/Image';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default async function Home() {
  const rawCountries = await fetchCountries()
  const countries = rawCountries ? rawCountries.countries : []
  const rawHotels = await fetchHotels({country: "Russia"});
  const hotels = rawHotels ? rawHotels.hotels : []

  if (!countries) {
    return null
  }

  return (
    <Row gutter={[64, 64]}>
      <Col xs={24}>
        <div>
        <Carousel autoplay>
          <>
            {hotels.map(hotel => (
              <Link href={`/hotel/${hotel.uid}`} key={hotel.uid}>
                <div className="h-[600px] relative cursor-pointer">
                  <p className='text-2xl text-white font-bold text-center z-30 absolute bottom-10 w-full bg-black bg-opacity-40'>{hotel.title}</p>
                  <Image src={hotel.previewImage.url} alt="" className='w-full h-full object-cover absolute top-0 left-0 z-20' />
                </div>
              </Link>
            ))}
          </>
        </Carousel>
        </div>
        <Title level={3}>Страны</Title>
        <div className="flex flex-wrap gap-3">
          <CardList items={countries} href="/booking?country=" />
        </div>
      </Col>
    </Row>
  )
}
