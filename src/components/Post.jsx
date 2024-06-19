function Post({ post, deletePost }) {
  return (
    <div>
      <h3>
        {post.title} - ID #{post.id}
      </h3>
      <p>{post.text}</p>
      <button
        onClick={() => {
          deletePost(post.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Post;
