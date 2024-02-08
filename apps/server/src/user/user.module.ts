import { Module } from '@nestjs/common'
import { UserResolvers } from './user.resolvers'
import { UserService } from './user.service'
import { UserRepository } from './user.repository'
import { PrismaService } from '@/prisma/prisma.service'
import { ImageModule } from '@/image/image.module'
import { AuthModule } from '@/modules/auth/auth.module'

@Module({
  providers: [UserResolvers, UserService, UserRepository, PrismaService],
  imports: [ImageModule, AuthModule],
  exports: [UserService, UserRepository],
})
export class UserModule {}
