import prisma from '../../src/core/libs/prisma'

export default class RoleSeed {
  async run() {
    try {
      return await prisma.role.createMany({
        data: [
          {
            id: 1,
            code: 'admin',
            name: 'Администратор',
          },
          {
            id: 2,
            code: 'user',
            name: 'Пользователь',
          },
        ],
      })
    } catch (error) {
      console.error('Error in RoleSeed.run: ', error)
      throw error // rethrow the error after logging
    }
  }
}
