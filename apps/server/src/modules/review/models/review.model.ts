import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Review } from '@prisma/client'
import { UserModel } from '@/modules/user/user.model'
import { HotelModel } from '@/modules/hotel/models/hotel.model'

@ObjectType()
export class ReviewModel implements Review {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => Float)
  rating: number

  @Field()
  description: string

  @Field((type) => Int)
  userId: number
  @Field((type) => UserModel)
  user: UserModel

  @Field((type) => Int)
  hotelId: number
  @Field((type) => HotelModel)
  hotel: UserModel
}
