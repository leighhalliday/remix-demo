import { Link, Form, redirect } from "remix";
import type { ActionFunction } from "remix";
import { db } from "~/utils/db.server";

export default function NewComment() {
  return (
    <div>
      <h2>New Comment</h2>
    </div>
  );
}
