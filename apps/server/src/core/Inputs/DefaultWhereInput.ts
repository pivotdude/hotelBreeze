import { Field, Int } from '@nestjs/graphql'

export class DefaultWhereInput {
  @Field((type) => Int, { nullable: true })
  id?: number

  @Field({ nullable: true })
  uid?: string
}
