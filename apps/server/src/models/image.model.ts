import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Image } from '../../prisma/generated/client'

@ObjectType()
export class ImageModel implements Image {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  url: string

  @Field()
  name: string

  @Field((type) => Int, { nullable: true })
  hotelId: number
}
