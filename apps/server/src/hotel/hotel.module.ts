import { Module } from '@nestjs/common'
import { HotelResolver } from './hotel.resolver'
import { HotelService } from './hotel.service'
import { HotelRepository } from './hotel.repository'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [HotelResolver, HotelService, HotelRepository, PrismaService],
  imports: [],
})
export class HotelModule {}
