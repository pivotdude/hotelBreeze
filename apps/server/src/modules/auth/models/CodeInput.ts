import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CodeInput {
  @Field()
  email: string
  @Field()
  code: string
}
