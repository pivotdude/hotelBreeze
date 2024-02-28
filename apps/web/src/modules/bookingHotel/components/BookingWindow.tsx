'use client'
import React, { useState } from 'react'
import { Result } from '@/ui'
import Link from '@/components/app/Link'
import PaymentBooking from '@/modules/bookingHotel/components/PaymentBooking/PaymentBooking'
import SubmitBooking from '@/modules/bookingHotel/components/SubmitBooking/SubmitBooking'

export interface BookingWindowRouteProps {
  params: {
    uid: string
  }
  searchParams: {
    count: number
    startDate: string
    endDate: string
  }
}

export interface BookingHotelProps {
  isAuth: boolean
  route: BookingWindowRouteProps
  isOverloaded: boolean
}
export default function BookingWindow({ isAuth, route, isOverloaded }: BookingHotelProps) {
  const [step, setStep] = useState(1)

  if (isOverloaded) {
    return <Result status="error" title="Ваша бронь невозможна" subTitle="Превышено максимальное количество гостей" />
  }

  return (
    <>
      {step === 1 && <SubmitBooking isAuth={isAuth} route={route} setStep={setStep} />}
      {step === 2 && <PaymentBooking setStep={setStep} route={route} />}
      {step === 3 && (
        <Result
          status="success"
          title="Оплата прошла успешно"
          subTitle="Вы успешно забранировали отель"
          extra={[
            <Link key="profile-link" href="/profile">
              Перейти в профиль
            </Link>,
          ]}
        />
      )}
    </>
  )
}
