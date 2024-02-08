import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Image } from '@prisma/client'

@Injectable()
export class ImageRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; url: string }): Promise<Image> {
    return this.prisma.image.create({
      data,
    })
  }
}
