import { Module } from '@nestjs/common'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'
import { PostRepository } from './post.repository'
import { PrismaService } from '../prisma/prisma.service' // Импортируйте PrismaService

@Module({
  providers: [PostResolver, PostService, PostRepository, PrismaService], // Добавьте PrismaService здесь
  imports: [],
})
export class PostModule {}
