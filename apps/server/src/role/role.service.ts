import { Injectable } from '@nestjs/common'
import { RoleRepository } from './role.repository'
import { Role } from '../../prisma/generated/client'
import { RoleCreateInput } from './models/RoleCreateInput'

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.findAll()
  }

  async find(id: number): Promise<Role> {
    return this.roleRepository.find({ id })
  }

  async create(input: RoleCreateInput): Promise<Role> {
    return this.roleRepository.create(input)
  }
}
