import {Resolver, Query, Mutation, Args, Subscription, Int} from '@nestjs/graphql';
import { RoleService } from './role.service';
import { PubSub } from 'graphql-subscriptions';
import {Role, Prisma} from "@prisma/client";
import {RoleModel} from "./role.model";
import {RoleCreateInput} from "./models/RoleCreateInput";

@Resolver(of => RoleModel)
export class RoleResolvers {
  constructor(private readonly roleService: RoleService) {}

  @Query(returns => [RoleModel])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll()
  }

  @Query(returns => RoleModel)
  async role(@Args('id', { type: () => Int }) id: number): Promise<Role> {
    return this.roleService.find(id);
  }

  @Mutation(returns => RoleModel)
  async roleCreate(@Args('input') args: RoleCreateInput): Promise<Role> {
    return this.roleService.create(args);
  }


  // @Mutation('updateRole')
  // async update(@Args('input') args: UpdateRole): Promise<Role> {
  //   return this.roleService.update(args);
  // }
  //
  // @Mutation('deleteRole')
  // async delete(@Args('id') args: string): Promise<Role> {
  //   return this.roleService.delete(args);
  // }
  //
  // @Subscription('postCreated')
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
