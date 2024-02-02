import { Module } from '@nestjs/common'
import { CountryResolver } from './country.resolver'
import { CountryService } from './country.service'
import { CountryRepository } from './country.repository'

@Module({
  providers: [CountryResolver, CountryService, CountryRepository],
  imports: [],
  exports: [CountryService, CountryRepository],
})
export class CountryModule {}
