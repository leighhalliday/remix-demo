import { Link, Form, redirect } from "remix";
import type { ActionFunction } from "remix";
import { db } from "~/utils/db.server";

export let action: ActionFunction = async ({ params, request }) => {
  const postId = parseInt(params.id ?? "");
  const formData = await request.formData();
  const content = formData.get("content") as string;

  const post = await db.post.findFirst({ where: { id: postId } });

  if (!post) {
    return redirect("/");
  }

  await db.comment.create({ data: { postId: post.id, content } });

  return redirect(`/post/${post.id}`);
};

export default function NewComment() {
  return (
    <div>
      <h2>New Comment</h2>

      <Form method="post">
        <label>
          <div>Content:</div>
          <textarea name="content" required />
        </label>

        <div>
          <button type="submit">Add</button>
        </div>
      </Form>

      <p>
        <Link to="..">Cancel</Link>
      </p>
    </div>
  );
}
