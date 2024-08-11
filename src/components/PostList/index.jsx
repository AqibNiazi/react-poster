import React, { useState } from "react";
import Post from "@components/Post";
import classes from "./PostList.module.css";
import NewPost from "@components/NewPost";
import Model from "@components/Model";

const PostList = ({ isPosting, onStopPosting }) => {
  const [post, setPost] = useState([]);
  const onAddPostHandler = (postData) => {
    setPost((existingPost) => [postData, ...existingPost]);
  };
  return (
    <>
      {isPosting && (
        <Model onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={onAddPostHandler} />
        </Model>
      )}

      <ul className={classes?.posts}>
        {post?.map((post) => (
          <Post author={post?.author} body={post?.body} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
