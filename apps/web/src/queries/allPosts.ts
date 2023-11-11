import { request } from 'graphql-request'
import gql from 'graphql-tag'

export interface PostQuery {
  id: number
  title: string
  content: string
  user: {
    name: string
  };
}

export interface PostsQuery {
  posts: PostQuery[];
}

export const fetchPosts = async (): Promise<PostsQuery> => {
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
  return request("http://localhost:3005/graphql", query);
};

