import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RoomsModel {
  @Field()
  beds: number

  @Field()
  bath: number

  @Field()
  extras: string[]
}
