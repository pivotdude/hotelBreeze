import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface CountryQuery {
  name: string
  englishName: string
}

export interface CountriesQuery {
  countries: CountryQuery[]
}

export const fetchCountries = async (): Promise<CountriesQuery | void> => {
  const query = gql`
    query GetCountriesWithCity {
      countries {
        name
        englishName
      }
    }
  `
  return sendRequest<CountriesQuery>(query)
}
