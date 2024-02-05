import { Prisma } from '@prisma/client'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class PostCreateInput implements Prisma.PostCreateInput {
  @Field()
  title: string

  @Field()
  content: string

  @Field({ nullable: true })
  isPublished?: boolean

  @Field((type) => Int)
  userId: number
}
