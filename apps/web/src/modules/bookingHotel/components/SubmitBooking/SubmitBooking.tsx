'use client'
import React from 'react'
import { Button, Col, Row } from '@/ui'
import Booking from '@/modules/bookingHotel/components/SubmitBooking/Booking'

interface SubmitBookingProps {
  isAuth: boolean
  route: {
    params: {
      uid: string
    }
    searchParams: {
      count: number
      startDate: string
      endDate: string
    }
  }
  setStep: (step: number) => void
}

export default function SubmitBooking({ isAuth, route, setStep }: SubmitBookingProps) {
  return (
    <Row>
      <Col span={24}>
        <Booking route={route} />
      </Col>
      <Col span={24}>
        {!isAuth ? (
          <p>Чтобы оформить бронирование, войдите или зарегистрируйтесь</p>
        ) : (
          <Button onClick={() => setStep(2)} type="primary">
            Подтвердить бронирование
          </Button>
        )}
      </Col>
    </Row>
  )
}
