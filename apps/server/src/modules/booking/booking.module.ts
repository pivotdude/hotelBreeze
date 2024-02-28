import { Module } from '@nestjs/common'
import { BookingResolver } from './booking.resolver'
import { BookingService } from './booking.service'
import { BookingRepository } from './booking.repository'
import { HotelModule } from '@/modules/hotel/hotel.module'
import { AuthModule } from '@/modules/auth/auth.module'

@Module({
  providers: [BookingResolver, BookingService, BookingRepository],
  imports: [HotelModule, AuthModule],
  exports: [BookingService, BookingRepository],
})
export class BookingModule {}
