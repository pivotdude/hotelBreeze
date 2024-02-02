import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Favorite } from '@prisma/client'
import { UserModel } from '../user/user.model'
import { HotelModel } from '../hotel/models/hotel.model'

@ObjectType()
export class FavoriteModel implements Favorite {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => Int)
  userId: number
  @Field((type) => UserModel)
  user: UserModel

  @Field((type) => Int)
  hotelId: number
  @Field((type) => HotelModel)
  hotel: UserModel
}
