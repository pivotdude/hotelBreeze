import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ReviewRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: { description: string; rating: number; hotelId: number; userId: number }) {
    return this.prismaService.review.create({
      data: input,
    })
  }

  async getAvgRating(hotelId: number) {
    return this.prismaService.review.aggregate({
      where: { hotelId: hotelId },
      _count: {
        id: true,
      },
      _avg: {
        rating: true,
      },
    })
  }

  async update(uid: string, input: { description: string; rating: number }) {
    return this.prismaService.review.update({
      where: {
        uid,
      },
      data: input,
    })
  }
}
