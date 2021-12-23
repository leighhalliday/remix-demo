import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";
import type { Comment } from "@prisma/client";

type LoaderData = {
  comments: Comment[];
};

export let loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  const postId = parseInt(params.id ?? "");
  const comments = await db.comment.findMany({ where: { postId } });

  return { comments };
};

export default function Comments() {
  const { comments } = useLoaderData<LoaderData>();

  return (
    <div>
      <h2>Comments</h2>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>

      <p>
        <Link to="comment">New Comment</Link>
      </p>
    </div>
  );
}
