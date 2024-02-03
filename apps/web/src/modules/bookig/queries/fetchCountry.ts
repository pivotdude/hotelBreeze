import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface CountryQuery {
  name: string
  code: string
  cities: {
    uid: string
    name: string
  }[]
}

export interface CountriesQuery {
  countries: CountryQuery[]
}

export const fetchCountries = async (): Promise<CountriesQuery | void> => {
  const query = gql`
    query GetCountriesWithCity {
      countries {
        name
        code
        cities {
          uid
          name
        }
      }
    }
  `
  return sendRequest<CountriesQuery>(query)
}
