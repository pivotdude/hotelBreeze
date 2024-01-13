import { Module } from '@nestjs/common'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'
import { PostRepository } from './post.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [PostResolver, PostService, PostRepository, PrismaService],
  imports: [],
})
export class PostModule {}
