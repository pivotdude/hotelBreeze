import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class BookingCreateInput {
  @Field()
  startDate: string

  @Field()
  endDate: string

  @Field()
  guests: string

  @Field()
  hotelUid: string
}
