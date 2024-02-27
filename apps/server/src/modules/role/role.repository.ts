import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Role } from '@prisma/client'
import { RoleCreateInput } from './models/RoleCreateInput'
import { DefaultWhereInput } from '@/core/Inputs/DefaultWhereInput'

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async find(data: DefaultWhereInput): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: data,
    })
  }

  async findAll(): Promise<Role[]> {
    return this.prisma.role.findMany()
  }

  async create(data: RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({
      data,
    })
  }
}
