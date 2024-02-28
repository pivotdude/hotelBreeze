import postsHandlers from '@/mocks/postsHandlers'
import constants from '@/constants'
import countriesHandlers from '@/mocks/countriesHandlers'
import countriesCitiesHandlers from '@/mocks/countriesCitiesHandlers'
import ImagesHandlers from '@/mocks/ImagesHandlers'
import confirmAuthorizationHandler from '@/mocks/confirmAuthorizationHandler'
import hotelsHandler from '@/mocks/HotelsHandler'

export const handlers = constants.STABS_ENABLE === 'true'
  ? [
      ...postsHandlers,
      ...countriesHandlers,
      ...countriesCitiesHandlers,
      ...ImagesHandlers,
      ...confirmAuthorizationHandler,
      ...hotelsHandler,
    ]
  : []
