"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number,
  title: string,
  body: string,
  tags: string[]
}
const PostsClientSide = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, [])

  return (
    <div>
      <h1>Post no Client Side</h1>
      <p>teste</p>

      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}
 
export default PostsClientSide;