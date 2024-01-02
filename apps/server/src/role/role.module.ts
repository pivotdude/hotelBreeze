import { Module } from '@nestjs/common'
import { RoleResolver } from './role.resolver'
import { RoleService } from './role.service'
import { RoleRepository } from './role.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [RoleResolver, RoleService, RoleRepository, PrismaService],
  imports: [],
})
export class RoleModule {}
