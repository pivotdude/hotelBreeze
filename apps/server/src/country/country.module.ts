import { Module } from '@nestjs/common'
import { CountryResolver } from './country.resolver'
import { CountryService } from './country.service'
import { CountryRepository } from './country.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [CountryResolver, CountryService, CountryRepository, PrismaService],
  imports: [],
})
export class CountryModule {}
