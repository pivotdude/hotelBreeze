import { graphql, HttpResponse } from 'msw'
import { ConfirmAuthorizationResponse } from '@/queries/confirmAuthorization'

interface ConfirmAuthorizationData {
  data: ConfirmAuthorizationResponse
}

const auth: ConfirmAuthorizationData = {
  data: {
    confirmAuthorization: {
      message: 'ok',
      access_token: 'token',
      user: {
        uid: '6c39e78e-28c8-42cb-ae28-f734f5649183',
        name: 'Max',
      },
    },
  },
}
const countriesCitiesHandlers = [
  graphql.query('confirmAuthorization', () => {
    return HttpResponse.json(auth)
  }),
]

export default countriesCitiesHandlers
