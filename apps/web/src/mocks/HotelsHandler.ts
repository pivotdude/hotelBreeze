import { graphql, HttpResponse } from 'msw'
import { HotelQuery } from '@/modules/bookig/queries/fetchHotels'

interface CountryGraphqlQuery {
  data: HotelQuery
}

const hotels: CountryGraphqlQuery = {
  data: {
    hotels: [],
  },
}
const HotelsHandler = [
  graphql.query('GetHotels', () => {
    return HttpResponse.json(hotels)
  }),
]

export default HotelsHandler
