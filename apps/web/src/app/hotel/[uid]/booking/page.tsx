import React from 'react'
import { Col, Result, Row } from '@/ui'
import BookingInfo from '@/modules/bookingHotel/components/SubmitBooking/BookingInfo'
import { fetchHotel } from '@/modules/bookingHotel/queries/fetchHotel'
import { isAuthenticated } from '@/helpers/utils'
import BookingWindow from '@/modules/bookingHotel/components/BookingWindow'
import Errors from '@/helpers/Errors'
import dayjs from '@/libs/dayjs'

export interface BookingPageParams {
  params: {
    uid: string
  }
  searchParams: {
    count: number
    startDate: string
    endDate: string
  }
}

export default async function BookingPage({ params, searchParams }: BookingPageParams) {
  const rawHotel = await fetchHotel(params.uid)
  const hotel = rawHotel?.hotel

  if (!hotel) {
    return Errors.notFound()
  }

  const endDate = dayjs(searchParams.endDate)
  const startDate = dayjs(searchParams.startDate)
  const differenceInDays = endDate.diff(startDate, 'day')

  if (differenceInDays > 30) {
    return (
      <Result
        status="error"
        title="Ваша бронь невозможна"
        subTitle="Превышено максимальное количество возможных к бронированию дней"
      />
    )
  }

  const isAuth = await isAuthenticated()

  return (
    <Row className="my-40" gutter={[64, 0]}>
      <Col xs={24} md={12}>
        <BookingWindow
          isAuth={isAuth}
          route={{ searchParams, params }}
          isOverloaded={hotel.data.maxGuests < searchParams.count}
        />
      </Col>
      <Col xs={24} md={12}>
        {hotel ? (
          <BookingInfo hotel={hotel} searchParams={searchParams} differenceInDays={differenceInDays} />
        ) : (
          <p>Отель не найден</p>
        )}
      </Col>
    </Row>
  )
}
