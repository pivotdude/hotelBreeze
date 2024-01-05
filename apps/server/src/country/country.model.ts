import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Country } from '@prisma/client'
import { LanguageModel } from '../models/language.model'
import { ImageModel } from '../models/image.model'

@ObjectType()
export class CountryModel implements Country {
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
  code: string

  @Field()
  description: string

  @Field()
  languageId: number

  @Field()
  englishName: string

  @Field((type) => Int)
  avatarId: number

  @Field((type) => Int)
  previewImageId: number
  @Field((type) => ImageModel)
  previewImage: ImageModel

  @Field((type) => Int)
  bannerImageId: number
  @Field((type) => ImageModel)
  bannerImage: ImageModel

  @Field((type) => LanguageModel)
  language: LanguageModel
}
