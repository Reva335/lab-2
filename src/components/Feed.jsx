import PostCard from './PostCard'

function Feed({ posts, setPosts }) {
  return (
    <section aria-label="feed">
      {posts.map(p => (
        <PostCard
          key={p.id}
          post={p}
          setPosts={setPosts}
        />
      ))}
    </section>
  )
}

export default Feed
