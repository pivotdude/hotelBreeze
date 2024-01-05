import { Injectable } from '@nestjs/common'
import { CountryRepository } from './country.repository'
import { Country } from '@prisma/client'

@Injectable()
export class CountryService {
  constructor(private readonly countryRepository: CountryRepository) {}

  async findAll(): Promise<Country[]> {
    return this.countryRepository.findAll()
  }

  async find(uid: string): Promise<Country> {
    return this.countryRepository.find({ uid })
  }
}
