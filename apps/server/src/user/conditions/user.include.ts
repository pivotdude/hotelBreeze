import { Prisma } from '@prisma/client'

// : Prisma.UserDelegate
export const findManyInclude: Prisma.UserFindManyArgs = {
  include: {
    role: true,
  },
}
