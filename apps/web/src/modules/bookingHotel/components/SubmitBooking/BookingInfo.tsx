import React, { useMemo } from 'react'
import { Card, Col, Divider, Row, Title } from '@/ui'
import Image from '@/components/ui/Image'
import { IBookingHotel } from '@/modules/bookingHotel/queries/fetchHotel'
import ReviewPanel from '@/components/ui/Review/ReviewPanel'
import dayjs from '@/libs/dayjs'
import Pluralization from '@/helpers/Pluralization'
import Formatter from '@/helpers/Formatter'

interface BookingInfoProps {
  hotel: IBookingHotel
  searchParams: {
    count: number
    startDate: string
    endDate: string
  }
}

const BookingInfo = ({ hotel, searchParams }: BookingInfoProps) => {
  const endDate = dayjs(searchParams.endDate)
  const startDate = dayjs(searchParams.startDate)
  const differenceInDays = endDate.diff(startDate, 'day')

  const price = useMemo(() => {
    return Formatter.price(hotel.price * differenceInDays)
  }, [searchParams, hotel])

  const nds = useMemo(() => {
    return Formatter.price(hotel.price * differenceInDays * 0.2)
  }, [searchParams, hotel])

  const amount = useMemo(() => {
    return Formatter.price(hotel.price * differenceInDays * 0.2 + hotel.price * differenceInDays)
  }, [searchParams, hotel])

  return (
    <Card>
      <Row>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col>
              <Image width={120} height={120} className="rounded-xl object-cover" src={hotel.previewImage.url} alt="" />
            </Col>
            <Col>
              <Title level={5}>{hotel.title}</Title>
              <ReviewPanel rating={hotel.reviewRating} count={hotel.reviewCount} />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="space-between" gutter={[0, 16]}>
            <Col span={24}>
              <Divider />
              <Title level={4}>Детализация цены</Title>
            </Col>
            <Col>
              <p>
                {Formatter.price(hotel.price)} x {differenceInDays} {Pluralization.getDaysWord(differenceInDays)} ={' '}
                {price}
              </p>
            </Col>
            <Col span={24}>
              <p>НДС: {nds}</p>
            </Col>
            <Col span={24}>
              <p>Итого: {amount}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default BookingInfo
