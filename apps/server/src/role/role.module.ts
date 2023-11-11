import { Module } from '@nestjs/common'
import { RoleResolvers } from './role.resolvers'
import { RoleService } from './role.service'
import { RoleRepository } from './role.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [RoleResolvers, RoleService, RoleRepository, PrismaService],
  imports: [],
})
export class RoleModule {}
