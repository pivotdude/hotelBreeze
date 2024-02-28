import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Booking } from '@prisma/client'
import { UserModel } from '@/modules/user/user.model'
import { HotelModel } from '@/modules/hotel/models/hotel.model'

@ObjectType()
export class BookingModel implements Booking {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  startDate: Date

  @Field()
  endDate: Date

  @Field((type) => Int)
  guests: number

  @Field((type) => Int)
  days: number

  @Field((type) => Float)
  // @ts-ignore
  price: number

  @Field((type) => Int)
  userId: number
  @Field((type) => UserModel)
  user: UserModel

  @Field((type) => Int)
  hotelId: number
  @Field((type) => HotelModel)
  hotel: UserModel
}
