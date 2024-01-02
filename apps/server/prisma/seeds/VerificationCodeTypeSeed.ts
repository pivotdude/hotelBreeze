import prisma from '../../src/core/libs/prisma'

export default class VerificationCodeTypeSeed {
  async run() {
    try {
      console.log('Running VerificationCodeTypeSeed')
      return await prisma.verificationCodeType.createMany({
        data: [
          {
            id: 1,
            code: 'confirmationRegistration',
            name: 'Подтверждение регистрации',
          },
          {
            id: 2,
            code: 'confirmationLogin',
            name: 'Подтверждение авторизации',
          },
        ],
      })
    } catch (error) {
      console.error('Error in RoleSeed.run: ', error)
      throw error // rethrow the error after logging
    }
  }
}
