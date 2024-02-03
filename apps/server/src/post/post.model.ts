import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Post } from '../../prisma/generated/client'
import { UserModel } from '../user/user.model'
import { ImageModel } from '../models/image.model'

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

  @Field((type) => Int)
  previewImageId: number
  @Field((type) => ImageModel)
  previewImage: ImageModel

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
