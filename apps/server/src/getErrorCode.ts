import { constants } from './core/libs/constants'

const getErrorCode = (errorName) => {
  return constants.errorType[errorName]
}

export default getErrorCode
