import { useLoaderData, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import type { Post } from "@prisma/client";

type LoaderData = {
  post: Post;
};

export let loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  const id = parseInt(params.id ?? "");
  const post = await db.post.findFirst({ where: { id } });

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
};

export default function PostShow() {
  const { post } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>

      <Outlet />
    </div>
  );
}
