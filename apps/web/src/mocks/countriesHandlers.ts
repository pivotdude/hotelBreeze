import { graphql, HttpResponse } from 'msw'
import { CountriesQuery } from '@/modules/main/queries/fetchCountries'

interface CountryGraphqlQuery {
  data: CountriesQuery
}

const allPosts: CountryGraphqlQuery = {
  data: {
    countries: [
      {
        uid: '9ef6ac28-4c6c-4bd6-837c-cd5c892c274e',
        name: 'Россия',
        description:
          'Россия - это огромная страна с богатой историей и культурой. Здесь есть что посмотреть и чем заняться, как любителям активного отдыха, так и ценителям истории и искусства.',
        englishName: 'Russia',
        code: 'RU',
        language: {
          name: 'Русский',
        },
        previewImage: {
          url: '/static/country/view/kremlin.jpg',
          name: 'Кремль',
        },
      },
      {
        uid: 'db545496-82f2-4204-878c-916e074320bc',
        name: 'Китай',
        description:
          'Китай - это страна контрастов, где древние традиции соседствуют с современными технологиями. Здесь можно увидеть Великую Китайскую стену, Запретный город, а также посетить современные мегаполисы, такие как Шанхай и Пекин.',
        englishName: 'China',
        code: 'CN',
        language: {
          name: 'Китайский',
        },
        previewImage: {
          url: '/static/country/view/chinaHram.jpg',
          name: 'Храм в китае',
        },
      },
      {
        uid: '26ea4a5a-43f1-4393-b65e-44778cc10596',
        name: 'Беларусь',
        description:
          'Беларусь - это страна с богатой историей и культурой. Здесь можно посетить древние города, такие как Минск и Витебск, а также насладиться живописными пейзажами.',
        englishName: 'Belarus',
        code: 'BY',
        language: {
          name: 'Русский',
        },
        previewImage: {
          url: '/static/country/view/belarusCherckov.jpg',
          name: 'Беларусь церковь',
        },
      },
      {
        uid: 'db7c461c-25f6-4ce0-9270-d102d9987479',
        name: 'Аргентина',
        description:
          'Аргентина - это страна с разнообразными ландшафтами, от заснеженных Анд до тропических лесов Амазонки. Здесь можно заняться горнолыжным спортом, пляжным отдыхом, а также отправиться в сафари.',
        englishName: 'Argentina',
        code: 'AR',
        language: {
          name: 'Испанский',
        },
        previewImage: {
          url: '/static/country/view/argentina.jpg',
          name: 'Аргентина, Буeнос Айрес, Розовые деревья',
        },
      },
      {
        uid: '5f7dd0ec-a771-4d2f-8db0-d3ad80de6f2b',
        name: 'Саудовская Аравия',
        description:
          'Саудовская Аравия - это страна с богатой историей и культурой. Здесь можно посетить древние города, такие как Мекка и Медина, а также насладиться пустынными пейзажами.',
        englishName: 'Saudi Arabia',
        code: 'SA',
        language: {
          name: 'Арабский',
        },
        previewImage: {
          url: '/static/country/view/arabia.jpg',
          name: 'Саудовская Аравия, Медина',
        },
      },
      {
        uid: '014082c3-c69e-4e1a-9553-066490234676',
        name: 'Египет',
        description:
          'Египет - это страна с богатой историей и культурой. Здесь можно посетить древние пирамиды, Сфинкса, а также насладиться пляжным отдыхом на Красном море.',
        englishName: 'Egypt',
        code: 'EG',
        language: {
          name: 'Арабский',
        },
        previewImage: {
          url: '/static/country/view/pyramidHeops.jpg',
          name: 'Пирамида Хеопса',
        },
      },
      {
        uid: '7e872c1d-c147-4f4b-9388-0577713788b7',
        name: 'Турция',
        description:
          'Турция - это страна с богатой историей и культурой. Здесь можно посетить древние руины, мечети, а также насладиться пляжным отдыхом на Средиземном море.',
        englishName: 'Turkey',
        code: 'TR',
        language: {
          name: 'Немецкий',
        },
        previewImage: {
          url: '/static/country/view/stambul.jpg',
          name: 'Стамбул, Турция',
        },
      },
    ],
  },
}
const countriesHandler = [
  graphql.query('GetCountries', () => {
    return HttpResponse.json(allPosts)
  }),
]

export default countriesHandler
