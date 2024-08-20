import React from "react";
import PostList from "@components/PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Posts;
export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8080/posts");
    const resData = await response.json();
    return resData?.posts;
  } catch (error) {
    console.log(error);
  }
};
