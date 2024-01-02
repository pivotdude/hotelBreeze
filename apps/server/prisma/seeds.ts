import RoleSeed from './seeds/roleSeed'
import prisma from '../src/core/libs/prisma'
import VerificationCodeTypeSeed from './seeds/VerificationCodeTypeSeed'

async function main() {
  try {
    const seeds = [RoleSeed, VerificationCodeTypeSeed]

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
