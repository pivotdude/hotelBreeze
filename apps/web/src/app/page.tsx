import { fetchPosts, PostsQuery } from "@/queries/allPosts";
import Post from "@/components/ui/core/Post";


export default async function Home() {
  const posts = await fetchPosts()
  return (
    <>
      {posts.posts.map((post) => <Post post={post} />)}
    </>
  )
}
