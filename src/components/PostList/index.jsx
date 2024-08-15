import React, { useState } from "react";
import Post from "@components/Post";
import classes from "./PostList.module.css";
const PostList = () => {
  const [post, setPost] = useState([]);
  const onAddPostHandler = (postData) => {
    setPost((existingPost) => [postData, ...existingPost]);
  };
  return (
    <>
      {post?.length === 0 && (
        <div className="flex flex-col items-center">
          <p className="font-medium text-lg">No Post Added yet</p>
          <p className="text-sm">Start Posting</p>
        </div>
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
