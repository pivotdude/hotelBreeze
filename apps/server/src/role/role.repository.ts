import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Role, Prisma} from '@prisma/client';
import {RoleCreateInput} from "./models/RoleCreateInput";
import {DefaultWhereInput} from "../core/Inputs/DefaultWhereInput";

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async find(data: DefaultWhereInput): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: data,
    });
  }

  async findAll(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  // async findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.RoleWhereUniqueInput;
  //   where?: Prisma.RoleWhereInput;
  //   orderBy?: Prisma.RoleOrderByWithRelationInput;
  // }): Promise<Role[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async create(data: RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({
      data,
    });
  }

  // async update(params: {
  //   where: Prisma.RoleWhereUniqueInput;
  //   data: Prisma.RoleUpdateInput;
  // }): Promise<Role> {
  //   const { where, data } = params;
  //   return this.prisma.user.update({
  //     data,
  //     where,
  //   });
  // }

  // async delete(where: Prisma.RoleWhereUniqueInput): Promise<Role> {
  //   return this.prisma.user.delete({
  //     where,
  //   });
  // }
}
