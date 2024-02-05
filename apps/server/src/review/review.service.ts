import { Injectable } from '@nestjs/common'
import { ReviewRepository } from './review.repository'
import { CreateReviewInput } from './inputs/CreateReviewInput'
import { HotelRepository } from '@/hotel/hotel.repository'
import { Prisma } from '@prisma/client'
import { UpdateReviewInput } from './inputs/UpdateReviewInput'

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly hotelRepository: HotelRepository
  ) {}

  async create(input: CreateReviewInput, userId: number) {
    const hotel = await this.hotelRepository.findByUid(input.hotelUid)
    const review = await this.reviewRepository.create({
      description: input.description,
      rating: input.rating,
      hotelId: hotel.id,
      userId: userId,
    })
    await this.recalculateRating(hotel.id)
    return review
  }

  async update(input: UpdateReviewInput) {
    const review = await this.reviewRepository.update(input.reviewUid, {
      description: input.description,
      rating: input.rating,
    })
    await this.recalculateRating(review.hotelId)
    return review
  }

  async recalculateRating(hotelId: number) {
    const hotelAggregation = await this.reviewRepository.getAvgRating(hotelId)

    const reviewCount = hotelAggregation._count.id ?? 0
    const reviewRating = hotelAggregation._avg?.rating ?? 0

    await this.hotelRepository.update({
      id: hotelId,
      reviewCount: reviewCount,
      reviewRating: new Prisma.Decimal(reviewRating),
    })
  }
}
