import { Prisma } from '../../../prisma/generated/client'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UserWhereInput implements Prisma.UserWhereInput {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string
}
