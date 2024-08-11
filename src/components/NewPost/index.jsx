import { useState } from "react";
import classes from "./NewPost.module.css";
function NewPost({ onCancel, onAddPost }) {
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
    onCancel();
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          value={enteredBody}
          required
          rows={3}
          onChange={bodyChangeHandler}
        />
      </p>

      <p>
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
