import {
  Resolver,
  Query,
  Mutation,
  Args,
  Subscription,
  Int,
} from '@nestjs/graphql'
import { UserService } from './user.service'
import { PubSub } from 'graphql-subscriptions'
import { User, Prisma } from '@prisma/client'
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
    return this.userService.find(id)
  }

  @Mutation((returns) => UserModel)
  async userCreate(@Args('input') args: UserCreateInput): Promise<User> {
    return this.userService.create(args)
  }

  // @Mutation('updateUser')
  // async update(@Args('input') args: UpdateUser): Promise<User> {
  //   return this.userService.update(args);
  // }
  //
  // @Mutation('deleteUser')
  // async delete(@Args('id') args: string): Promise<User> {
  //   return this.userService.delete(args);
  // }
  //
  // @Subscription('postCreated')
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
