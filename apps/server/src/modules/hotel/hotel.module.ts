import { Module } from '@nestjs/common'
import { HotelResolver } from './hotel.resolver'
import { HotelService } from './hotel.service'
import { HotelRepository } from './hotel.repository'
import { AuthModule } from '../auth/auth.module'

@Module({
  providers: [HotelResolver, HotelService, HotelRepository],
  imports: [AuthModule],
  exports: [HotelService, HotelRepository],
})
export class HotelModule {}
