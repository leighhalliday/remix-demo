import type { LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";
import type { Post } from "@prisma/client";

type LoaderData = {
  posts: Post[];
};

export let loader: LoaderFunction = async (): Promise<LoaderData> => {
  const posts = await db.post.findMany({});
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
