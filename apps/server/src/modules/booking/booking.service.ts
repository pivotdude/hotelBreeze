import { Injectable } from '@nestjs/common'
import { BookingRepository } from './booking.repository'
import { BookingCreateInput } from '@/modules/booking/input/BookingCreateInput'
import { HotelService } from '@/modules/hotel/hotel.service'
import Utils from '@/core/libs/Utils'

@Injectable()
export class BookingService {
  constructor(private readonly countryRepository: BookingRepository, private hotelService: HotelService) {}

  async create(data: BookingCreateInput, userId: number) {
    const hotel = await this.hotelService.find(data.hotelUid)
    const days = Utils.differenceInDays(data.startDate, data.endDate)
    return this.countryRepository.create(data, hotel.id, hotel.price, userId, days)
  }
}
