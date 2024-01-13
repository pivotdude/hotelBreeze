import { Injectable } from '@nestjs/common'
import { HotelRepository } from './hotel.repository'
import { Hotel } from '@prisma/client'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Injectable()
export class HotelService {
  constructor(private readonly hotelRepository: HotelRepository) {}

  async findAll(): Promise<Hotel[]> {
    const hotels = await this.hotelRepository.findAll()
    console.log(hotels)
    return hotels
  }

  async find(input: DefaultWhereInput): Promise<Hotel> {
    return this.hotelRepository.find(input)
  }
}
