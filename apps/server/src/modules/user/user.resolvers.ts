import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { UserModel } from './user.model'
import { UserCreateInput } from './models/UserCreateInput'

@Resolver((of) => UserModel)
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
}
