import { graphql, HttpResponse } from 'msw'
import { HotelsQuery } from '@/modules/bookig/queries/fetchHotels'

interface CountryGraphqlQuery {
  data: HotelsQuery
}

const hotels: CountryGraphqlQuery = {
  data: {
    hotels: [
      {
        uid: '2bc7c8e3-5c6b-4c0e-8e9c-9b2b7b7b7b7b',
        title: 'Фейковый отель',
        description: 'Фейковый отель',
        price: 0,
        reviewRating: 0,
        reviewCount: 0,
        previewImage: {
          url: '',
          name: 'fake',
        },
      },
    ],
  },
}
const HotelsHandler = [
  graphql.query('GetHotels', () => {
    return HttpResponse.json(hotels)
  }),
]

export default HotelsHandler
