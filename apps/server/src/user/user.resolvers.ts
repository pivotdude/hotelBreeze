import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { UserModel } from './user.model'
import { UserCreateInput } from './models/UserCreateInput'
import { AuthInterceptor } from '@/modules/auth/auth.interceptor'
import { UseInterceptors } from '@nestjs/common'
import { ContextUser } from '@/Models'
import { UserUpdateInput } from '@/user/models/UserUpdateInput'

@Resolver((of) => UserModel)
@UseInterceptors(AuthInterceptor)
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [UserModel])
  async users(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Query((returns) => UserModel)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findWhere({ id })
  }

  @Mutation((returns) => UserModel)
  async userCreate(@Args('input') args: UserCreateInput): Promise<User> {
    return this.userService.createUser(args)
  }
  @Mutation((returns) => UserModel)
  async userUpdate(@Args('input') args: UserUpdateInput, @Context('user') user: ContextUser): Promise<User> {
    return this.userService.update(args, user.id)
  }
}
