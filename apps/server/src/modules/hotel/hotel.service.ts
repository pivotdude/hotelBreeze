import { Injectable } from '@nestjs/common'
import { HotelRepository } from './hotel.repository'
import { Hotel } from '@prisma/client'
import { CountryFilterInput } from '@/modules/country/inputs/CountryFilterInput'

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async findAll(params: CountryFilterInput): Promise<Hotel[]> {
    return this.hotelRepository.findAll(params)
  }

  async find(uid: string, userId?: number | null): Promise<Hotel> {
    const hotel = await this.hotelRepository.find(uid, userId)

    if (!hotel) {
      return null
    }
    // @ts-ignore
    hotel.isFollow = hotel?.favorites?.length > 0

    // @ts-ignore
    hotel.userReview = hotel?.reviews?.find((review) => review.userId === userId)
    // @ts-ignore
    hotel.reviews = hotel?.reviews?.filter((review) => review.userId !== userId)

    return hotel
  }
}
