'use client'
import image from '@/modules/main/source/card.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BookingBanner() {
  const router = useRouter()
  const onClick = () => {
    router.push('/booking')
  }
  return (
    <Image alt="hotel booking" src={image} className="w-full object-cover hover:cursor-pointer" onClick={onClick} />
  )
}
