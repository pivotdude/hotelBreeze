import postsHandlers from '@/mocks/postsHandlers'
import { STABS_ENABLE } from '@/constants/proccess'

export const handlers = STABS_ENABLE ? [...postsHandlers] : []
