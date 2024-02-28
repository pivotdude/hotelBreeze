import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { BookingCreateInput } from '@/modules/booking/input/BookingCreateInput'
import dayjs from '@/core/libs/dayjs'

@Injectable()
export class BookingRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: BookingCreateInput, hotelId: number, price: number, userId: number, days: number) {
    console.log(data)
    return this.prismaService.booking.create({
      data: {
        startDate: dayjs(data.startDate).toISOString(),
        endDate: dayjs(data.endDate).toISOString(),
        guests: parseInt(data.guests),
        hotelId: hotelId,
        days: days,
        price: price,
        userId: userId,
      },
    })
  }
}
