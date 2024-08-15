import { useState } from "react";
import classes from "./NewPost.module.css";
import Model from "@components/Model";
import { Link } from "react-router-dom";
function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const authorChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredTitle,
    };
    onAddPost(postData);
  };
  return (
    <Model>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className="mb-4">
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            value={enteredBody}
            required
            rows={3}
            onChange={bodyChangeHandler}
          />
        </p>

        <p className="mb-4">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            value={enteredTitle}
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Model>
  );
}

export default NewPost;
