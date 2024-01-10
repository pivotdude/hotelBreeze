import { GraphQLClient } from 'graphql-request'
import constants from '@/constants'

const client = new GraphQLClient(constants.BACKEND_URL + '/graphql')

export default client
