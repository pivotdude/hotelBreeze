import { Col, Row } from 'antd'
import image from './../components/app/home/banner/Big Card.png'
import Image from 'next/image'
import PickCountry from '@/components/app/home/PickCountry/PickCountry'
import PickHotel from '@/components/app/home/PickHotel/PickHotel'
import DiscoverBanner from '@/components/app/home/Banners/DiscoverBanner'

export default async function Home() {
  // const posts = await fetchPosts()
  return (
    <Row gutter={[64, 64]} className="px-32">
      <Col xs={24}>
        <div className="bg-sky-300">
          <Image alt="ss" src={image} />
          {/*<img className="object-cover h-[720px] w-full" src={image} />*/}
        </div>
      </Col>

      <Col xs={24}>
        <PickCountry />
      </Col>
      <Col xs={24}>
        <PickHotel />
      </Col>
      <Col xs={24}>
        <DiscoverBanner />
      </Col>
    </Row>
  )
}
