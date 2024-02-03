import { Module } from '@nestjs/common'
import { ReviewResolver } from './review.resolver'
import { ReviewService } from './review.service'
import { ReviewRepository } from './review.repository'
import { AuthModule } from '../modules/auth/auth.module'
import { HotelModule } from '../hotel/hotel.module'

@Module({
  providers: [ReviewResolver, ReviewService, ReviewRepository],
  imports: [AuthModule, HotelModule],
  exports: [ReviewService, ReviewRepository],
})
export class ReviewModule {}
