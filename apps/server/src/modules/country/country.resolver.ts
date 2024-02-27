import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'
import { CountryModel } from './country.model'
import { Country } from '@prisma/client'
import { CountryFilterInput } from '@/modules/country/inputs/CountryFilterInput'

@Resolver((of) => CountryModel)
export class CountryResolver {
  constructor(private readonly postService: CountryService) {}

  @Query((returns) => [CountryModel])
  async countries(@Args('input') args: CountryFilterInput): Promise<Country[]> {
    return this.postService.findAll(args.country)
  }

  @Query((returns) => CountryModel)
  async country(@Args('uid', { type: () => Int }) uid: string): Promise<Country> {
    return await this.postService.find(uid)
  }
}
