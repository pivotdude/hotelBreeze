import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Prisma, User } from '@prisma/client'
import { UserCreateInput } from './models/UserCreateInput'
import { ImageService } from '@/image/image.service'

@Injectable()
export class UserRepository {
  constructor(
    private prisma: PrismaService,
    private readonly imageService: ImageService
  ) {}

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

  async update(id: number, data: { name: string; avatarId: number }): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
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

  // async update(id: number, data: { email: string; avatar: Blob }): Promise<User> {
  //   await this.imageService.uploadAvatar(data.avatar)
  //   return this.prisma.user.update({
  //     where: {
  //       id,
  //     },
  //     data,
  //   })
  // }
}
