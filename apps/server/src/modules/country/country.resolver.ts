import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'
import { CountryModel } from './country.model'
import { Country } from '@prisma/client'

@Resolver((of) => CountryModel)
export class CountryResolver {
  constructor(private readonly postService: CountryService) {}

  @Query((returns) => [CountryModel])
  async countries(): Promise<Country[]> {
    return this.postService.findAll()
  }

  @Query((returns) => CountryModel)
  async country(@Args('uid', { type: () => Int }) uid: string): Promise<Country> {
    return await this.postService.find(uid)
  }
}
