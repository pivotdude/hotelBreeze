import { Args, Context, Query, Resolver } from '@nestjs/graphql'
import { HotelService } from './hotel.service'
import { HotelModel } from './models/hotel.model'
import { Hotel } from '../../prisma/generated/client'
import { AuthInterceptor } from '../modules/auth/auth.interceptor'
import { ContextUser } from '../Models'
import { UseInterceptors } from '@nestjs/common'

@UseInterceptors(AuthInterceptor)
@Resolver((of) => HotelModel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Query((returns) => [HotelModel])
  async hotels(): Promise<Hotel[]> {
    return this.hotelService.findAll()
  }

  @Query((returns) => HotelModel)
  async hotel(@Args('uid', { type: () => String }) uid: string, @Context('user') user: ContextUser) {
    return await this.hotelService.find(uid, user?.id)
  }
}
