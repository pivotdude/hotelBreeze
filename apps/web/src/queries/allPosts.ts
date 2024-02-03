import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface PostQuery {
  id: number
  title: string
  content: string
  user: {
    name: string
  }
}

export interface PostsQuery {
  posts: PostQuery[]
}

export const fetchPosts = async (): Promise<PostsQuery | void> => {
  const query = gql`
    query GetPosts {
      posts {
        id
        title
        content
        user {
          name
        }
      }
    }
  `
  return sendRequest<PostsQuery>(query)
}
