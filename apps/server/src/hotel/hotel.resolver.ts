import { Args, Query, Resolver } from '@nestjs/graphql'
import { HotelService } from './hotel.service'
import { HotelModel } from './models/hotel.model'
import { Hotel } from '@prisma/client'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Resolver((of) => HotelModel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Query((returns) => [HotelModel])
  async hotels(): Promise<Hotel[]> {
    return this.hotelService.findAll()
  }

  @Query((returns) => HotelModel)
  async hotel(@Args('uid', { type: () => String }) input: DefaultWhereInput) {
    return await this.hotelService.find(input)
  }
}
