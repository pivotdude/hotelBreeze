import { Injectable } from '@nestjs/common'
import { FavoriteRepository } from './favorite.repository'
import { Hotel } from '../../prisma/generated/client'
import { HotelRepository } from '../hotel/hotel.repository'

@Injectable()
export class FavoriteService {
  constructor(
    private readonly favoriteRepository: FavoriteRepository,
    private readonly hotelRepository: HotelRepository
  ) {}

  async follow(hotelUid: string, userId: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findByUid(hotelUid)

    return this.favoriteRepository.follow(hotel.id, userId)
  }

  async unfollow(uid: string): Promise<Hotel> {
    return this.favoriteRepository.unfollow(uid)
  }
}
