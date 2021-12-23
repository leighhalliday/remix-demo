import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import type { Comment } from "@prisma/client";

export default function Comments() {
  return (
    <div>
      <h2>Comments</h2>
    </div>
  );
}
