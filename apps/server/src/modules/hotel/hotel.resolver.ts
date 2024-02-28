import { Args, Context, Query, Resolver } from '@nestjs/graphql'
import { HotelService } from './hotel.service'
import { HotelModel } from './models/hotel.model'
import { Hotel } from '@prisma/client'
import { AuthInterceptor } from '@/modules/auth/auth.interceptor'
import { ContextUser } from '@/Models'
import { UseInterceptors } from '@nestjs/common'
import { CountryFilterInput } from '@/modules/country/inputs/CountryFilterInput'

@UseInterceptors(AuthInterceptor)
@Resolver((of) => HotelModel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Query((returns) => [HotelModel])
  async hotels(@Args('input') args: CountryFilterInput): Promise<Hotel[]> {
    return this.hotelService.findAll(args)
  }

  @Query((returns) => HotelModel, { nullable: true })
  async hotel(@Args('uid', { type: () => String }) uid: string, @Context('user') user: ContextUser) {
    return this.hotelService.find(uid, user?.id)
  }
}
