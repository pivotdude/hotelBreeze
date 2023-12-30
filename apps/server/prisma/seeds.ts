import RoleSeed from './seeds/roleSeed'
import prisma from '../src/core/libs/prisma'

async function main() {
  try {
    const seeds = [RoleSeed]

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
