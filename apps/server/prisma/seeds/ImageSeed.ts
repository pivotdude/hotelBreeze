import prisma from '../../src/core/libs/prisma'

type ExtensionType = 'jpg' | 'png' | 'webp' | 'jpeg'

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
            url: this.getStaticUrl(1, 'jpg'),
            name: 'Дом деревянный',
          },
          {
            id: 9,
            url: this.getStaticUrl(2, 'png'),
            name: 'Отель Таёжный',
          },
          {
            id: 10,
            url: this.getStaticUrl(3, 'png'),
            name: 'Отель Гамма Измайлово',
          },
          {
            id: 11,
            url: this.getStaticUrl(4, 'jpg'),
            name: 'DEL900 Hotel Boutique',
          },
          {
            id: 12,
            url: this.getStaticUrl(5, 'jpg'),
            name: 'Sunworld Hotel Wangfujing',
          },
          {
            id: 13,
            url: this.getStaticUrl(6, 'jpg'),
            name: 'Boutique Dedem Hotel Sultanahmet',
          },
          {
            id: 14,
            url: this.getStaticUrl(7, 'webp'),
            name: 'Le Bosphorus Al Madinah',
          },
          {
            id: 15,
            url: this.getStaticUrl(8, 'webp'),
            name: 'Гостинница Беларусь 3*',
          },
          {
            id: 16,
            url: this.getStaticUrl(9, 'jpeg'),
            name: 'Pullman Zamzam Madina',
          },
          {
            id: 17,
            url: this.getStaticUrl(10, 'jpg'),
            name: 'Sofitel Shahd Al Madinah',
          },
          {
            id: 18,
            url: this.getStaticUrl(11, 'jpg'),
            name: 'Отель Сарапулъ',
          },
          {
            id: 19,
            url: this.getStaticUrl(12, 'jpeg'),
            name: 'Старая башня',
          },
          {
            id: 20,
            url: this.getStaticUrl(13, 'jpeg'),
            name: 'Гостиница Каскад',
          },
          {
            id: 21,
            url: this.getStaticUrl(14, 'jpeg'),
            name: "Гостиница AMAKS Центральная"
          }
        ],
      })  
    } catch (error) {
      console.error('Error in ImageSeed: ', error)
      throw error
    }
  }

  private getStaticUrl(id: number, extension: ExtensionType = 'jpg', type = 'hotel') {
    return `/static/${type}/images/${id}/preview.${extension}`
  }
}
