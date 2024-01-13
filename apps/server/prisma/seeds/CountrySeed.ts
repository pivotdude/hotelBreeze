import prisma from '../../src/core/libs/prisma'

export default class CountrySeed {
  async run() {
    try {
      console.log('Running CountrySeed...')
      return await prisma.country.createMany({
        data: [
          {
            id: 1,
            name: 'Россия',
            englishName: 'Russia',
            code: 'RU',
            description:
              'Россия - это огромная страна с богатой историей и культурой. Здесь есть что посмотреть и чем заняться, как любителям активного отдыха, так и ценителям истории и искусства.',
            languageId: 1,
            previewImageId: 1,
          },
          {
            id: 2,
            name: 'Китай',
            englishName: 'China',
            code: 'CN',
            description:
              'Китай - это страна контрастов, где древние традиции соседствуют с современными технологиями. Здесь можно увидеть Великую Китайскую стену, Запретный город, а также посетить современные мегаполисы, такие как Шанхай и Пекин.',
            languageId: 4,
            previewImageId: 2,
          },
          {
            id: 3,
            name: 'Беларусь',
            englishName: 'Belarus',
            code: 'BY',
            description:
              'Беларусь - это страна с богатой историей и культурой. Здесь можно посетить древние города, такие как Минск и Витебск, а также насладиться живописными пейзажами.',
            languageId: 1,
            previewImageId: 3,
          },
          {
            id: 4,
            name: 'Аргентина',
            englishName: 'Argentina',
            code: 'AR',
            description:
              'Аргентина - это страна с разнообразными ландшафтами, от заснеженных Анд до тропических лесов Амазонки. Здесь можно заняться горнолыжным спортом, пляжным отдыхом, а также отправиться в сафари.',
            languageId: 6,
            previewImageId: 4,
          },
          {
            id: 5,
            name: 'Саудовская Аравия',
            englishName: 'Saudi Arabia',
            code: 'SA',
            description:
              'Саудовская Аравия - это страна с богатой историей и культурой. Здесь можно посетить древние города, такие как Мекка и Медина, а также насладиться пустынными пейзажами.',
            languageId: 7,
            previewImageId: 5,
          },
          {
            id: 6,
            name: 'Египет',
            englishName: 'Egypt',
            code: 'EG',
            description:
              'Египет - это страна с богатой историей и культурой. Здесь можно посетить древние пирамиды, Сфинкса, а также насладиться пляжным отдыхом на Красном море.',
            languageId: 7,
            previewImageId: 6,
          },
          {
            id: 7,
            name: 'Турция',
            englishName: 'Turkey',
            code: 'TR',
            description:
              'Турция - это страна с богатой историей и культурой. Здесь можно посетить древние руины, мечети, а также насладиться пляжным отдыхом на Средиземном море.',
            languageId: 3,
            previewImageId: 7,
          },
        ],
      })
    } catch (error) {
      console.error('Error in CountrySeed: ', error)
      throw error
    }
  }
}
