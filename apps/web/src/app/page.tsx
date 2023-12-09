import { fetchPosts } from '@/queries/allPosts'

export default async function Home() {
  const posts = await fetchPosts()
  return <></>
}
