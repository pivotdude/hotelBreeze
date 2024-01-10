import { Injectable } from '@nestjs/common'
import { HotelRepository } from './hotel.repository'
import { Hotel } from '@prisma/client'

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.findAll()
  }

  async find(uid: string): Promise<Hotel> {
    return this.hotelRepository.find({ uid })
  }
}
