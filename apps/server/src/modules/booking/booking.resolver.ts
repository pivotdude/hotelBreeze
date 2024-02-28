import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { BookingService } from './booking.service'
import { BookingModel } from './booking.model'
import { BookingCreateInput } from '@/modules/booking/input/BookingCreateInput'
import { UseInterceptors } from '@nestjs/common'
import { AuthInterceptor } from '@/modules/auth/auth.interceptor'
import { ContextUser } from '@/Models'
import { Booking } from '@prisma/client'

@UseInterceptors(AuthInterceptor)
@Resolver((of) => BookingModel)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation((returns) => BookingModel)
  async confirmBooking(@Args('input') input: BookingCreateInput, @Context('user') user: ContextUser): Promise<Booking> {
    return this.bookingService.create(input, user.id)
  }
}
