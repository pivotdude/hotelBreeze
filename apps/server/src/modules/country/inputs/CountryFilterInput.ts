import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CountryFilterInput {
  @Field({ nullable: true })
  country?: string
}
