import prisma from '../../src/core/libs/prisma'

export default class ImageHotelSeed {
  async run() {
    try {
      console.log('Running ImageHotelSeed...')
      return await prisma.image.createMany({
        data: [
          {
            id: 100,
            url: '/static/hotel/images/1/1.jpg',
            name: 'Отель Таёжный комната',
            hotelId: 1,
          },
          {
            id: 101,
            url: '/static/hotel/images/1/2.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 102,
            url: '/static/hotel/images/1/3.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 103,
            url: '/static/hotel/images/1/4.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 104,
            url: '/static/hotel/images/2/1.png',
            name: 'Отель Гамма Измайлово. Комната',
            hotelId: 3,
          },
          {
            id: 105,
            url: '/static/hotel/images/2/2.png',
            name: 'Отель Гамма Измайлово. Хол',
            hotelId: 3,
          },
        ],
      })
    } catch (error) {
      console.error('Error in ImageHotelSeed: ', error)
      throw error
    }
  }
}
