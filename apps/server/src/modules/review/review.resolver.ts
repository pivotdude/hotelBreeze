import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { ReviewService } from './review.service'
import { AuthInterceptor } from '@/modules/auth/auth.interceptor'
import { UseInterceptors } from '@nestjs/common'
import { ReviewModel } from './models/review.model'
import { CreateReviewInput } from './inputs/CreateReviewInput'
import { UpdateReviewInput } from './inputs/UpdateReviewInput'
import { ContextUser } from '@/Models'

@UseInterceptors(AuthInterceptor)
@Resolver((of) => ReviewModel)
export class ReviewResolver {
  constructor(private readonly hotelService: ReviewService) {}

  @Mutation((returns) => ReviewModel)
  async createReview(@Args('input') input: CreateReviewInput, @Context('user') user: ContextUser) {
    return this.hotelService.create(input, user.id)
  }

  @Mutation((returns) => ReviewModel)
  async updateReview(@Args('input') input: UpdateReviewInput) {
    console.log('update input', input)
    return this.hotelService.update(input)
  }
}
