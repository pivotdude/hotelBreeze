import { Prisma } from '../../../prisma/generated/client'

// : Prisma.UserDelegate
export const findManyInclude: Prisma.UserFindManyArgs = {
  include: {
    role: true,
  },
}
