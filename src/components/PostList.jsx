import Post from "./Post";

function PostList({ posts, deletePost }) {
  return (
    <div>
      <h2>Список постов</h2>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
