import RoleSeed from './seeds/RoleSeed'
import prisma from '../src/core/libs/prisma'
import VerificationCodeTypeSeed from './seeds/VerificationCodeTypeSeed'
import CountrySeed from './seeds/CountrySeed'
import LanguageSeed from './seeds/LanguageSeed'
import ImageSeed from './seeds/ImageSeed'
import HotelSeed from './seeds/HotelSeed'
import CitySeed from './seeds/CitySeed'
import ImageHotelSeed from './seeds/ImageHotelSeed'

async function main() {
  const seeds = [
    RoleSeed,
    VerificationCodeTypeSeed,
    ImageSeed,
    LanguageSeed,
    CountrySeed,
    CitySeed,
    HotelSeed,
    ImageHotelSeed,
  ]

  for (const Seed of seeds) {
    const seedInstance = new Seed()
    try {
      await seedInstance.run()
    } catch (error) {
      console.error(error)
    }
  }
  console.log('Done!')
  await prisma.$disconnect()
}

main()
