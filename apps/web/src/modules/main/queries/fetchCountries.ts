import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface CountryQuery {
  uid: string
  name: string
  description: string
  englishName: string
  code: string
  language: {
    name: string
  }
  previewImage: {
    url: string
    name: string
  }
}

export interface CountriesQuery {
  countries: CountryQuery[]
}

export const fetchCountries = async (): Promise<CountriesQuery | void> => {
  const query = gql`
    query GetCountries {
      countries {
        uid
        name
        description
        englishName
        code
        language {
          name
        }
        previewImage {
          url
          name
        }
      }
    }
  `
  return sendRequest<CountriesQuery>(query)
}
