import { graphql, HttpResponse } from 'msw'
import { CountriesQuery } from '@/modules/bookig/queries/fetchCountry'

interface CountryGraphqlQuery {
  data: CountriesQuery
}

const countries: CountryGraphqlQuery = {
  data: {
    countries: [
      {
        name: 'Россия',
        code: 'RU',
        cities: [
          {
            uid: '16f373a4-4a83-4ce5-9c31-3f99035d02e0',
            name: 'Москва',
          },
          {
            uid: '7ec075df-5849-44ad-8665-a4a3ee625dcb',
            name: 'Санкт-Петербург',
          },
          {
            uid: '53ecdaa4-2e39-41d3-aa6d-1e91f81ce365',
            name: 'Новосибирск',
          },
          {
            uid: 'b5248161-6f90-42d0-964b-c942b48fe0c4',
            name: 'Екатеринбург',
          },
        ],
      },
      {
        name: 'Китай',
        code: 'CN',
        cities: [
          {
            uid: '3a30b3f8-4790-40e7-846e-e56b6acd6f70',
            name: 'Пекин',
          },
          {
            uid: '38cb49b1-93db-47ce-b3e1-368efec7d643',
            name: 'Шанхай',
          },
          {
            uid: '2be5db6b-6220-4815-8e3d-8485a7f14c2f',
            name: 'Гуанчжоу',
          },
          {
            uid: '2ed317d1-0ea9-4ca5-8ba9-d4e2a883b347',
            name: 'Хонконг',
          },
        ],
      },
      {
        name: 'Беларусь',
        code: 'BY',
        cities: [
          {
            uid: '2a1ad024-ed45-4231-84c2-4d8a2831a522',
            name: 'Минск',
          },
          {
            uid: '75c1c44e-76a5-4311-aef7-74c3cf15e2b2',
            name: 'Витебск',
          },
          {
            uid: 'eefe47be-ba2b-4df1-8724-9b310b839c3a',
            name: 'Гродно',
          },
          {
            uid: 'dbfdf406-c9c5-45fc-bd5b-9c0ef5f47266',
            name: 'Брест',
          },
        ],
      },
      {
        name: 'Аргентина',
        code: 'AR',
        cities: [
          {
            uid: 'c6659cd4-9dc9-4641-bda6-3f3676232217',
            name: 'Буэнос-Айрес',
          },
          {
            uid: '3eb9a778-93be-4c85-a572-36269d53d635',
            name: 'Кордова',
          },
          {
            uid: '93952879-bd15-45d5-88cf-b8af688d6bbe',
            name: 'Росарио',
          },
          {
            uid: '4984c00b-2331-4cc0-860a-0b83807da421',
            name: 'Мендоса',
          },
        ],
      },
      {
        name: 'Саудовская Аравия',
        code: 'SA',
        cities: [
          {
            uid: '28dd4d24-e7a6-4c4c-b75a-80bc3e87efca',
            name: 'Эр-Рияд',
          },
          {
            uid: 'be7d4d39-cecb-465d-8b59-a2e547b346f5',
            name: 'Джидда',
          },
          {
            uid: 'f030fc06-9f2c-4ecd-845d-5dd9d2c93a1e',
            name: 'Мекка',
          },
          {
            uid: '53152c18-1144-480e-ae87-edbabead9815',
            name: 'Медина',
          },
        ],
      },
      {
        name: 'Египет',
        code: 'EG',
        cities: [
          {
            uid: '5429ae0e-1033-4f85-91ec-8241f6dd76d3',
            name: 'Каир',
          },
          {
            uid: '123cc362-0479-4f66-a46d-13a8063d1375',
            name: 'Александрия',
          },
        ],
      },
      {
        name: 'Турция',
        code: 'TR',
        cities: [
          {
            uid: 'dda718ce-c913-4ecf-a028-8d495b2341a9',
            name: 'Стамбул',
          },
          {
            uid: '621523a7-38ef-414b-9821-7091b4840a8c',
            name: 'Анкара',
          },
        ],
      },
    ],
  },
}
const countriesCitiesHandlers = [
  graphql.query('GetCountriesWithCity', () => {
    return HttpResponse.json(countries)
  }),
]

export default countriesCitiesHandlers
