import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateReviewInput {
  @Field()
  hotelUid: string

  @Field()
  description: string

  @Field((type) => Int)
  rating: number
}
