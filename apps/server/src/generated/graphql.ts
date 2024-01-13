export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export type Mutation = {
  __typename?: 'Mutation'
  postCreate: PostModel
  roleCreate: RoleModel
  userCreate: UserModel
}

export type MutationPostCreateArgs = {
  input: PostCreateInput
}

export type MutationRoleCreateArgs = {
  input: RoleCreateInput
}

export type MutationUserCreateArgs = {
  input: UserCreateInput
}

export type PostCreateInput = {
  content: Scalars['String']['input']
  isPublished?: InputMaybe<Scalars['Boolean']['input']>
  title: Scalars['String']['input']
  userId: Scalars['Int']['input']
}

export type PostModel = {
  __typename?: 'PostModel'
  content: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  isPublished: Scalars['Boolean']['output']
  publishedAt: Scalars['String']['output']
  text: Scalars['String']['output']
  title: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: UserModel
  userId: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  post: PostModel
  posts: Array<PostModel>
  role: RoleModel
  roles: Array<RoleModel>
  user: UserModel
  users: Array<UserModel>
}

export type QueryPostArgs = {
  id: Scalars['Int']['input']
}

export type QueryRoleArgs = {
  id: Scalars['Int']['input']
}

export type QueryUserArgs = {
  id: Scalars['Int']['input']
}

export type RoleCreateInput = {
  code: Scalars['String']['input']
  description: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type RoleModel = {
  __typename?: 'RoleModel'
  code: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserCreateInput = {
  email: Scalars['String']['input']
  isVerified?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  roleId: Scalars['Int']['input']
}

export type UserModel = {
  __typename?: 'UserModel'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  isVerified: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  password: Scalars['String']['output']
  role: RoleModel
  roleId: Scalars['Int']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetPostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'PostModel'
    id: number
    uid: string
    content: string
    title: string
    text: string
    isPublished: boolean
    createdAt: any
    updatedAt: any
    publishedAt: string
    userId: number
    user: {
      __typename?: 'UserModel'
      id: number
      name: string
      email: string
      createdAt: any
      isVerified: boolean
      password: string
      uid: string
      updatedAt: any
      role: {
        __typename?: 'RoleModel'
        id: number
        uid: string
        code: string
        description: string
        name: string
        createdAt: any
        updatedAt: any
      }
    }
  }>
}
