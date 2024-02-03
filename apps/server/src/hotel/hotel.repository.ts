import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Hotel } from '../../prisma/generated/client'

@Injectable()
export class HotelRepository {
  constructor(private prismaService: PrismaService) {}

  async find(uid: string, userId: number | null): Promise<Hotel | null> {
    return this.prismaService.hotel.findUnique({
      where: {
        uid,
      },
      include: {
        previewImage: true,
        images: true,
        city: {
          include: {
            country: true,
          },
        },
        reviews: {
          include: {
            user: true,
          },
        },
        ...(userId && {
          favorites: {
            where: {
              userId,
            },
          },
        }),
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
  async findByUid(uid: string): Promise<Hotel | null> {
    return this.prismaService.hotel.findUnique({
      where: {
        uid,
      },
    })
  }

  update(hotel: Partial<Hotel>) {
    return this.prismaService.hotel.update({
      where: {
        id: hotel.id,
      },
      data: hotel,
    })
  }
}
