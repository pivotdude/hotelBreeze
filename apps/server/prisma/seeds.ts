import RoleSeed from './seeds/RoleSeed'
import prisma from '../src/core/libs/prisma'
import VerificationCodeTypeSeed from './seeds/VerificationCodeTypeSeed'
import CountrySeed from './seeds/CountrySeed'
import LanguageSeed from './seeds/LanguageSeed'
import ImageSeed from './seeds/ImageSeed'

async function main() {
  const seeds = [RoleSeed, VerificationCodeTypeSeed, ImageSeed, LanguageSeed, CountrySeed]

  try {
    for (const Seed of seeds) {
      const seedInstance = new Seed()
      await seedInstance.run()
    }
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
