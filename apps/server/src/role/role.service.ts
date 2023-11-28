import { Injectable } from '@nestjs/common'
import { RoleRepository } from './role.repository'
import { Role } from '@prisma/client'
import { RoleCreateInput } from './models/RoleCreateInput'

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  // async findOne(id: string): Promise<Role | null> {
  //   return this.prisma.post.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.findAll()
  }

  async find(id: number): Promise<Role> {
    return this.roleRepository.find({ id })
  }

  async create(input: RoleCreateInput): Promise<Role> {
    return this.roleRepository.create(input)
  }
  //
  // async update(params: UpdateRole): Promise<Role> {
  //   const { id, ...params_without_id } = params;
  //
  // }
}
