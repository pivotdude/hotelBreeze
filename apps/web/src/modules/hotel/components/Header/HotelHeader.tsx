'use client'
import { Typography } from 'antd'
import HotelCup from '@/modules/hotel/components/Header/HotelCup'
import { IHotel } from '@/modules/hotel/queries/fetchHotel'

interface HotelHeaderProps {
  hotel: IHotel
}

export default function HotelHeader({ hotel }: HotelHeaderProps) {
  return (
    <>
      <Typography.Title className="mb-0">{hotel.title}</Typography.Title>
      <HotelCup hotel={hotel} />
    </>
  )
}
