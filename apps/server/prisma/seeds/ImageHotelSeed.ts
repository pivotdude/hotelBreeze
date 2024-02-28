import prisma from '../../src/core/libs/prisma'

export default class ImageHotelSeed {
  async run() {
    try {
      console.log('Running ImageHotelSeed...')
      return await prisma.image.createMany({
        data: [
          {
            id: 100,
            url: this.getStaticUrl(2, '1.jpg'),
            name: 'Отель Таёжный комната',
            hotelId: 1,
          },
          {
            id: 101,
            url: this.getStaticUrl(2, '2.jpg'),
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 102,
            url: this.getStaticUrl(2, '3.jpg'),
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 103,
            url: this.getStaticUrl(2, '4.jpg'),
            name: 'Отель Таёжный',
            hotelId: 2,
          },
          {
            id: 104,
            url: this.getStaticUrl(3, '1.png'),
            name: 'Отель Гамма Измайлово. Комната',
            hotelId: 3,
          },
          {
            id: 105,
            url: this.getStaticUrl(3, '2.png'),
            name: 'Отель Гамма Измайлово. Хол',
            hotelId: 3,
          },
          {
            id: 106,
            name: 'DEL900 Hotel Boutique - Номер',
            url: this.getStaticUrl(4, '1.jpg'),
            hotelId: 4,
          },
          {
            id: 107,
            name: 'DEL900 Hotel Boutique - Здание',
            url: this.getStaticUrl(4, '3.jpg'),
            hotelId: 4,
          },
          {
            id: 108,
            name: 'DEL900 Hotel Boutique - Холл',
            url: this.getStaticUrl(4, '4.jpg'),
            hotelId: 4,
          },
        ],
      })
    } catch (error) {
      console.error('Error in ImageHotelSeed: ', error)
      throw error
    }
  }

  private getStaticUrl(hotelId: number, fileName: string) {
    return `/static/hotel/images/${hotelId}/${fileName}`
  }
}
