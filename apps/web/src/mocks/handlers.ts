import postsHandlers from '@/mocks/postsHandlers'
import constants from '@/constants'
import countriesHandlers from '@/mocks/countriesHandlers'
import countriesCitiesHandlers from '@/mocks/countriesCitiesHandlers'
import ImagesHandlers from '@/mocks/ImagesHandlers'
import confirmAuthorizationHandler from '@/mocks/confirmAuthorizationHandler'

export const handlers = constants.STABS_ENABLE
  ? [
      ...postsHandlers,
      ...countriesHandlers,
      ...countriesCitiesHandlers,
      ...ImagesHandlers,
      ...confirmAuthorizationHandler,
    ]
  : []
