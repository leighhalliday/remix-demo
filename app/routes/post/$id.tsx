import { useLoaderData, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import type { Post } from "@prisma/client";

export default function PostShow() {
  return (
    <div>
      <h1>post.title</h1>
      <div>post.content</div>
    </div>
  );
}
