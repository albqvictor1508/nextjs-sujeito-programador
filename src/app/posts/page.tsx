type Post = {
  id: number,
  title: string,
  body: string,
  tags: string[]
}

type PostProps = {
  posts: Post[]
}

const PostsServerSide = async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const data: PostProps = await response.json();
  return (
    <div>
      <h1>Post no Client Side</h1>
      <p>teste</p>

      {data.posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
 
export default PostsServerSide;