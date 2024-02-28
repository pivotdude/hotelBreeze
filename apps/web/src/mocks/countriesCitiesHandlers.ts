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
        englishName: 'Russian',
      },
      {
        name: 'Китай',
        englishName: 'China',
      },
      {
        name: 'Беларусь',
        englishName: 'Belarus',
      },
      {
        name: 'Аргентина',
        englishName: 'Argentina',
      },
      {
        name: 'Саудовская Аравия',
        englishName: 'Saudi Arabia',
      },
      {
        name: 'Египет',
        englishName: 'Egypt',
      },
      {
        name: 'Турция',
        englishName: 'Turkey',
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
