import { Module } from '@nestjs/common'
import { UserResolvers } from './user.resolvers'
import { UserService } from './user.service'
import { UserRepository } from './user.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [UserResolvers, UserService, UserRepository, PrismaService],
  imports: [],
})
export class UserModule {}
