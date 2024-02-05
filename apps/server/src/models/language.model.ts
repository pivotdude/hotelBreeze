import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Language } from '@prisma/client'

@ObjectType()
export class LanguageModel implements Language {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => Int)
  avatarId: number

  @Field()
  name: string

  @Field()
  code: string
}
