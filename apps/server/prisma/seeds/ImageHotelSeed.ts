import prisma from '../../src/core/libs/prisma'

export default class ImageHotelSeed {
  async run() {
    try {
      console.log('Running ImageHotelSeed...')
      return await prisma.image.createMany({
        data: [
          {
            id: 10,
            url: '/static/hotel/images/1/1.jpg',
            name: 'Отель Таёжный комната',
            hotelId: 2,
          },
          {
            id: 11,
            url: '/static/hotel/images/1/2.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 12,
            url: '/static/hotel/images/1/3.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 13,
            url: '/static/hotel/images/1/4.jpg',
            name: 'Отель Таёжный',
            hotelId: 2,
          },
        ],
      })
    } catch (error) {
      console.error('Error in ImageHotelSeed: ', error)
      throw error
    }
  }
}
