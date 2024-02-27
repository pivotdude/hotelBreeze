import { Field, Int, ObjectType } from '@nestjs/graphql'
import { User } from '@prisma/client'
import { RoleModel } from '@/modules/role/role.model'
import { FavoriteModel } from '@/modules/favorite/favorite.model'

@ObjectType()
export class UserModel implements User {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  isVerified: boolean

  @Field((type) => Int)
  roleId: number
  @Field((type) => RoleModel)
  role: RoleModel

  @Field((type) => Int)
  avatarId: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field((type) => [FavoriteModel])
  favorites: RoleModel
}
