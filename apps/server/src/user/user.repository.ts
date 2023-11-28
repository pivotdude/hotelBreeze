import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma, User } from '@prisma/client'
import { UserCreateInput } from './models/UserCreateInput'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async find(data: DefaultWhereInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: data,
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

  async create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    })
  }

  async update(
    where: DefaultWhereInput,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return this.prisma.user.update({
      data,
      where,
    })
  }

  // async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
  //   return this.prisma.user.delete({
  //     where,
  //   });
  // }
}
