'use client'
import { Button } from '@/ui'
import React from 'react'
import { BookingWindowRouteProps } from '@/modules/bookingHotel/components/BookingWindow'
import { confirmBooking } from '@/modules/bookingHotel/queries/confirmBooking'

export interface PaymentButtonProps {
  route: BookingWindowRouteProps
  setStep: (value: number) => void
}

export default function PaymentButton({ setStep, route }: PaymentButtonProps) {
  const handleClick = async () => {
    await confirmBooking({
      startDate: route.searchParams.startDate,
      endDate: route.searchParams.endDate,
      guests: route.searchParams.count,
      hotelUid: route.params.uid,
    })
    setStep(3)
  }

  return <Button onClick={handleClick}>Тест оплата</Button>
}
