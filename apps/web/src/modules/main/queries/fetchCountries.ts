import gql from 'graphql-tag'
import sendRequest from '@/core/sendRequest'

export interface CountryQuery {
  uid: string
  name: string
  description: string
  englishName: string
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

export const fetchCountries = async (): Promise<CountriesQuery> => {
  const query = gql`
    query GetCountries {
      countries {
        uid
        name
        description
        englishName
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
