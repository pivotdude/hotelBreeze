import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RoleService } from './role.service'
import { Role } from '@prisma/client'
import { RoleModel } from './role.model'
import { RoleCreateInput } from './models/RoleCreateInput'

@Resolver((of) => RoleModel)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query((returns) => [RoleModel])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll()
  }

  @Query((returns) => RoleModel)
  async role(@Args('id', { type: () => Int }) id: number): Promise<Role> {
    return this.roleService.find(id)
  }

  @Mutation((returns) => RoleModel)
  async roleCreate(@Args('input') args: RoleCreateInput): Promise<Role> {
    return this.roleService.create(args)
  }
}
