import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class FavoriteRepository {
  constructor(private prismaService: PrismaService) {}

  async follow(hotelId: number, userId: number): Promise<any> {
    return this.prismaService.favorite.create({
      data: {
        hotelId: hotelId,
        userId: userId,
      },
    })
  }

  async unfollow(uid: string): Promise<any> {
    return this.prismaService.favorite.delete({
      where: {
        uid,
      },
    })
  }
}
