import { Module } from '@nestjs/common';
import { PostResolvers } from './post.resolvers';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { PrismaService } from '../prisma/prisma.service'; // Импортируйте PrismaService

@Module({
  providers: [PostResolvers, PostService, PostRepository, PrismaService], // Добавьте PrismaService здесь
  imports: [],
})
export class PostModule {}
