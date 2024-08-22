import React, { useState, useEffect } from "react";
import Post from "@components/Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const posts = useLoaderData();

  // const onAddPostHandler = (postData) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPost((existingPost) => [postData, ...existingPost]);
  // };
  return (
    <>
      {/* {isFetching && <div className="flex justify-center">Loading....</div>} */}
      {posts?.length === 0 && (
        <div className="flex flex-col items-center">
          <p className="font-medium text-lg">No Post Added yet</p>
          <p className="text-sm">Start Posting</p>
        </div>
      )}
      {posts?.length > 0 && (
        <ul className={classes?.posts}>
          {posts?.map((post) => (
            <Post
              key={post?.id}
              id={post?.id}
              author={post?.author}
              body={post?.body}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
