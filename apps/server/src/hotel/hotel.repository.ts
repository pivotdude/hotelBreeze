import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Hotel } from '@prisma/client'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Injectable()
export class HotelRepository {
  constructor(private prismaService: PrismaService) {}

  async find(filter: DefaultWhereInput): Promise<Hotel | null> {
    return this.prismaService.hotel.findUnique({
      where: filter,
      include: {
        previewImage: true,
        images: true,
        city: {
          include: {
            country: true,
          },
        },
      },
    })
  }

  async findAll(): Promise<Hotel[]> {
    return this.prismaService.hotel.findMany({
      include: {
        previewImage: true,
        images: true,
        city: {
          include: {
            country: true,
          },
        },
      },
    })
  }
}
