import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Hotel } from '@prisma/client'
import { ImageModel } from '@/models/image.model'
import { CityModel } from '@/models/city.model'
import { DataModel } from './data.model'
import { FavoriteModel } from '@/favorite/favorite.model'
import { ReviewModel } from '@/review/models/review.model'

@ObjectType()
export class HotelModel implements Hotel {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  title: string

  @Field({ nullable: true })
  description: string

  @Field((type) => Float)
  price: number

  @Field((type) => Float)
  // @ts-ignore
  reviewRating: number

  @Field((type) => Int)
  reviewCount: number

  @Field((type) => DataModel)
  // @ts-ignore
  data: DataModel

  @Field((type) => Int)
  cityId: number
  @Field((type) => CityModel)
  city: CityModel

  @Field((type) => Int)
  previewImageId: number
  @Field((type) => ImageModel)
  previewImage: ImageModel

  @Field((type) => [ImageModel])
  images: ImageModel[]

  @Field((type) => [FavoriteModel], { nullable: true })
  favorites: FavoriteModel[]

  @Field((type) => [ReviewModel], { nullable: true })
  reviews: ReviewModel[]

  @Field((type) => ReviewModel, { nullable: true })
  userReview: ReviewModel

  @Field()
  isFollow: boolean
}
