import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Country } from '../../prisma/generated/client'
import { DefaultWhereInput } from '../core/Inputs/DefaultWhereInput'

@Injectable()
export class CountryRepository {
  constructor(private prismaService: PrismaService) {}

  async find(filter: DefaultWhereInput): Promise<Country | null> {
    return this.prismaService.country.findUnique({
      where: filter,
      include: {
        language: true,
        cities: true,
      },
    })
  }

  async findAll(): Promise<Country[]> {
    return this.prismaService.country.findMany({
      include: {
        language: true,
        cities: true,
        previewImage: true,
        bannerImage: true,
      },
    })
  }
}
