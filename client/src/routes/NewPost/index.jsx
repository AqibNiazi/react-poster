import classes from "./NewPost.module.css";
import Model from "@components/Model";
import { Form, Link, redirect } from "react-router-dom";
function NewPost() {
  return (
    <Model>
      <Form method="post" className={classes.form}>
        <p className="mb-4">
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p className="mb-4">
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;
export const action = async ({ request }) => {
  const formData = await request?.formData();
  const postData = Object.fromEntries(formData);

  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
};
