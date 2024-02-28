import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Hotel } from '@prisma/client'
import { CountryFilterInput } from '@/modules/country/inputs/CountryFilterInput'

@Injectable()
export class HotelRepository {
  constructor(private prismaService: PrismaService) {}

  async find(uid: string, userId?: number | null): Promise<Hotel | null> {
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
        bookings: true,
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

  async findAll(params: CountryFilterInput): Promise<Hotel[]> {
    return this.prismaService.hotel.findMany({
      where: {
        ...(params.country && {
          city: {
            country: {
              englishName: params.country,
            },
          },
        }),
      },
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
