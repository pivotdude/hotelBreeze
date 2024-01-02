import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RegistrationInput {
  @Field()
  name: string
  @Field()
  email: string
  @Field()
  code: string
}
