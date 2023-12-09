'use client'
import React, { useState } from 'react'
import { PostQuery } from '@/queries/allPosts'

interface PostProps {
  post: PostQuery
}

export default function Post({ post }: PostProps) {
  const [isFollowed, setIsFollowed] = useState<boolean>(false)

  return <></>
}
