import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  console.log(posts);
  return (
    <main>
      <h1>Posts index</h1>
      <Link to="admin" className="">
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
