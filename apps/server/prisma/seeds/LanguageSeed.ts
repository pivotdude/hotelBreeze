import prisma from '../../src/core/libs/prisma'

export default class LanguageSeed {
  async run() {
    try {
      console.log('Running LanguageSeed...')
      return await prisma.language.createMany({
        data: [
          {
            id: 1,
            code: 'ru',
            name: 'Русский',
          },
          {
            id: 2,
            code: 'en',
            name: 'Английский',
          },
          {
            id: 3,
            code: 'de',
            name: 'Немецкий',
          },
          {
            id: 4,
            code: 'ch',
            name: 'Китайский',
          },
          {
            id: 5,
            code: 'fr',
            name: 'Французский',
          },
          {
            id: 6,
            code: 'es',
            name: 'Испанский',
          },
          {
            id: 7,
            code: 'ar',
            name: 'Арабский',
          },
        ],
      })
    } catch (error) {
      console.error('Error in LanguageSeed: ', error)
      throw error
    }
  }
}
