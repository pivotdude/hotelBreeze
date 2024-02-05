import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Prisma, User } from '@prisma/client'
import { UserCreateInput } from './models/UserCreateInput'
import { DefaultWhereInput } from '@/core/Inputs/DefaultWhereInput'

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findWhere(where: Partial<User>): Promise<User | null> {
    return this.prisma.user.findFirst({
      where,
      include: {
        role: true,
      },
    })
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        role: true,
      },
    })
  }

  async createUser(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    })
  }

  async update(where: DefaultWhereInput, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      data,
      where,
    })
  }

  async findUser(data: any): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: data,
    })
  }

  async findByIdForProfile(id: number): Promise<User | null> {
    const params = {
      include: {
        favorites: {
          include: {
            hotel: {
              include: {
                previewImage: true,
              },
            },
          },
        },
      },
    }
    return this.findById(id, params)
  }

  async findById(id: number, params: { include?: Prisma.UserInclude } = {}): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      ...params,
    })
  }

  findByUid(uid: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        uid,
      },
    })
  }

  // async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
  //   return this.prisma.user.delete({
  //     where,
  //   });
  // }
}
