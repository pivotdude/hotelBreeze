import { Injectable } from '@nestjs/common'
import { HotelRepository } from './hotel.repository'
import { Hotel } from '@prisma/client'

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.findAll()
  }

  async find(uid: string, userId: number | null): Promise<Hotel> {
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
