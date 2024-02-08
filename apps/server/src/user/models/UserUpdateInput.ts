import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateInput {
  @Field()
  avatar: string

  @Field()
  name: string
}
