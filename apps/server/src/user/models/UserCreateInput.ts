import { Prisma } from '@prisma/client'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UserCreateInput implements Prisma.UserCreateInput {
  @Field()
  email: string

  @Field()
  name: string

  @Field((type) => Int)
  roleId: number
}
