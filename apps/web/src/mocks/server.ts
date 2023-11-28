import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export default function initMocks() {
  if (typeof window === 'undefined') {
    const server = setupServer(...handlers)
    server.listen()
  } else {
    console.log('this is browser')
  }
}
