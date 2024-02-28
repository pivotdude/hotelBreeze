import { Field, ObjectType } from '@nestjs/graphql'
import { RoomsModel } from './rooms.model'

@ObjectType()
export class DataModel {
  @Field()
  maxGuests: number

  @Field()
  isEntireHome: boolean

  @Field((type) => RoomsModel)
  rooms: RoomsModel
}
