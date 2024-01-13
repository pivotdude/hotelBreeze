import prisma from '../../src/core/libs/prisma'

export default class ImageSeed {
  async run() {
    try {
      console.log('Running ImageSeed...')
      return await prisma.image.createMany({
        data: [
          {
            id: 1,
            url: '/static/country/view/kremlin.jpg',
            name: 'Кремль',
          },
          {
            id: 2,
            url: '/static/country/view/chinaHram.jpg',
            name: 'Храм в китае',
          },
          {
            id: 3,
            url: '/static/country/view/belarusCherckov.jpg',
            name: 'Беларусь церковь',
          },
          {
            id: 4,
            url: '/static/country/view/argentina.jpg',
            name: 'Аргентина, Буeнос Айрес, Розовые деревья',
          },
          {
            id: 5,
            url: '/static/country/view/arabia.jpg',
            name: 'Саудовская Аравия, Медина',
          },
          {
            id: 6,
            url: '/static/country/view/pyramidHeops.jpg',
            name: 'Пирамида Хеопса',
          },
          {
            id: 7,
            url: '/static/country/view/stambul.jpg',
            name: 'Стамбул, Турция',
          },
          {
            id: 8,
            url: '/static/placeholder/600x400.svg',
            name: 'Placeholder 600x400',
          },
          {
            id: 9,
            url: '/static/hotel/view/1/wbtpbs51usq8rkfnl1yrqbb31zfx0g0c.png',
            name: 'Отель Таёжный',
          },
        ],
      })
    } catch (error) {
      console.error('Error in ImageSeed: ', error)
      throw error
    }
  }
}
