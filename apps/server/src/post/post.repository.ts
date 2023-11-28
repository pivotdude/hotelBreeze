import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Post } from '@prisma/client'
import { PostCreateInput } from './models/PostCreateInput'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  async find(filter: DefaultWhereInput): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: filter,
      include: {
        user: {
          include: {
            role: true,
          },
        },
      },
    })
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        user: {
          include: {
            role: true,
          },
        },
      },
    })
  }

  // async findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.PostWhereUniqueInput;
  //   where?: Prisma.PostWhereInput;
  //   orderBy?: Prisma.PostOrderByWithRelationInput;
  // }): Promise<Post[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.post.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async create(data: PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    })
  }

  // async update(params: {
  //   where: Prisma.PostWhereUniqueInput;
  //   data: Prisma.PostUpdateInput;
  // }): Promise<Post> {
  //   const { where, data } = params;
  //   return this.prisma.post.update({
  //     data,
  //     where,
  //   });
  // }
  //
  // async delete(where: Prisma.PostWhereUniqueInput): Promise<Post> {
  //   return this.prisma.post.delete({
  //     where,
  //   });
  // }
}
