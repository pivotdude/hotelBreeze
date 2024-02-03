import { Field, Int, ObjectType } from '@nestjs/graphql'
import { City } from '../../prisma/generated/client'
import { ImageModel } from './image.model'
import { CountryModel } from '../country/country.model'

@ObjectType()
export class CityModel implements City {
  @Field((type) => Int)
  id: number

  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  name: string

  @Field()
  englishName: string

  @Field((type) => Int, { nullable: true })
  previewImageId: number
  @Field((type) => ImageModel)
  previewImage: ImageModel

  @Field((type) => Int, { nullable: true })
  bannerImageId: number
  @Field((type) => ImageModel)
  bannerImage: ImageModel

  @Field((type) => Int)
  countryId: number
  @Field((type) => CountryModel)
  country: CountryModel
}
