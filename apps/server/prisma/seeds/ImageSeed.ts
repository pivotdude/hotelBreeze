import prisma from '../../src/core/libs/prisma'

export default class ImageSeed {
  async run() {
    try {
      console.log('Running ImageSeed...')
      return await prisma.image.createMany({
        data: [
          {
            id: 1,
            url: '/static/kremlin.webp',
            name: 'Кремль',
          },
          {
            id: 2,
            url: '/static/chinaHram.jpg',
            name: 'Храм в китае',
          },
          {
            id: 3,
            url: '/static/belarusCherckov.jpg',
            name: 'Беларусь церковь',
          },
          {
            id: 4,
            url: '/static/argentina.webp',
            name: 'Аргентина, Буeнос Айрес, Розовые деревья',
          },
          {
            id: 5,
            url: '/static/arabia.jpg',
            name: 'Саудовская Аравия, Медина',
          },
          {
            id: 6,
            url: '/static/pyramidHeops.jpg',
            name: 'Пирамида Хеопса',
          },
          {
            id: 7,
            url: '/static/stambul.jpg',
            name: 'Стамбул, Турция',
          },
        ],
      })
    } catch (error) {
      console.error('Error in ImageSeed: ', error)
      throw error
    }
  }
}
