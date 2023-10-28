import {Prisma} from "@prisma/client";
import {Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class UserCreateInput implements Prisma.UserCreateInput {
  @Field()
  password: string

  @Field()
  email: string

  @Field()
  name: string

  @Field({nullable: true})
  isVerified?: boolean

  @Field(type => Int)
  roleId: number
}