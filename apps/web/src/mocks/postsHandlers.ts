import { graphql, HttpResponse } from 'msw'
import { PostsQuery } from '@/queries/allPosts'

interface PostGraphqlQuery {
  data: PostsQuery
}

const allPosts: PostGraphqlQuery = {
  data: {
    posts: [
      {
        id: 1,
        title: 'Post 1',
        content: 'Content 1',
        user: { name: 'User 1' },
      },
      {
        id: 2,
        title: 'Post 3',
        content: 'Content 3',
        user: { name: 'User 3' },
      },
    ],
  },
}

const postsHandlers = [
  graphql.query('GetPosts', () => {
    return HttpResponse.json(allPosts)
  }),
]

export default postsHandlers
