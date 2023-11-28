import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Post } from '@prisma/client'
import { UserModel } from '../user/user.model'

@ObjectType()
export class PostModel implements Post {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  title: string

  @Field()
  content: string

  @Field()
  isPublished: boolean

  @Field()
  text: string

  @Field()
  publishedAt: string

  @Field((type) => Int)
  userId: number

  @Field((type) => UserModel)
  user: UserModel

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
