import prisma from '../../src/core/libs/prisma'

export default class CitySeed {
  async run() {
    try {
      console.log('Running CitySeed...')
      return await prisma.city.createMany({
        data: [
          {
            id: 1,
            name: 'Москва',
            englishName: 'Moscow',
            countryId: 1,
          },
          {
            id: 2,
            name: 'Санкт-Петербург',
            englishName: 'Saint Petersburg',
            countryId: 1,
          },
          {
            id: 3,
            name: 'Новосибирск',
            englishName: 'Novosibirsk',
            countryId: 1,
          },
          {
            id: 4,
            name: 'Екатеринбург',
            englishName: 'Yekaterinburg',
            countryId: 1,
          },
          {
            id: 5,
            name: 'Пекин',
            englishName: 'Beijing',
            countryId: 2,
          },
          {
            id: 6,
            name: 'Шанхай',
            englishName: 'Shanghai',
            countryId: 2,
          },
          {
            id: 7,
            name: 'Гуанчжоу',
            englishName: 'Guangzhou',
            countryId: 2,
          },
          {
            id: 8,
            name: 'Хонконг',
            englishName: 'Hong Kong',
            countryId: 2,
          },
          {
            id: 9,
            name: 'Минск',
            englishName: 'Minsk',
            countryId: 3,
          },
          {
            id: 10,
            name: 'Витебск',
            englishName: 'Vitebsk',
            countryId: 3,
          },
          {
            id: 11,
            name: 'Гродно',
            englishName: 'Grodno',
            countryId: 3,
          },
          {
            id: 12,
            name: 'Брест',
            englishName: 'Brest',
            countryId: 3,
          },
          {
            id: 13,
            name: 'Буэнос-Айрес',
            englishName: 'Buenos Aires',
            countryId: 4,
          },
          {
            id: 14,
            name: 'Кордова',
            englishName: 'Cordoba',
            countryId: 4,
          },
          {
            id: 15,
            name: 'Росарио',
            englishName: 'Rosario',
            countryId: 4,
          },
          {
            id: 16,
            name: 'Мендоса',
            englishName: 'Mendoza',
            countryId: 4,
          },
          {
            id: 17,
            name: 'Эр-Рияд',
            englishName: 'Riyadh',
            countryId: 5,
          },
          {
            id: 18,
            name: 'Джидда',
            englishName: 'Jeddah',
            countryId: 5,
          },
          {
            id: 19,
            name: 'Мекка',
            englishName: 'Mecca',
            countryId: 5,
          },
          {
            id: 20,
            name: 'Медина',
            englishName: 'Medina',
            countryId: 5,
          },
          {
            id: 21,
            name: 'Каир',
            englishName: 'Cairo',
            countryId: 6,
          },
          {
            id: 22,
            name: 'Александрия',
            englishName: 'Alexandria',
            countryId: 6,
          },
          {
            id: 23,
            name: 'Стамбул',
            englishName: 'Istanbul',
            countryId: 7,
          },
          {
            id: 24,
            name: 'Анкара',
            englishName: 'Ankara',
            countryId: 7,
          },
          // Russia
          {
            id: 25,
            name: "Сарапул",
            englishName: "Sarapul",
            countryId: 1
          }
        ],
      })
    } catch (error) {
      console.error('Error in CitySeed: ', error)
      throw error
    }
  }
}
