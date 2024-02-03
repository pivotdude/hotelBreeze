import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateReviewInput {
  @Field()
  reviewUid: string

  @Field()
  description: string

  @Field((type) => Int)
  rating: number
}
