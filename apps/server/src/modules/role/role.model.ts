import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Role } from '@prisma/client'

@ObjectType()
export class RoleModel implements Role {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  code: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
