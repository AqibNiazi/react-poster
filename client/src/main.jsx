import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as PostLoader } from "@routes/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "@routes/RootLayout.jsx";
import NewPost, { action as PostData } from "@routes/NewPost";
import PostDetails, {
  loader as PostDetailsLoader,
} from "@routes/PostDetails/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: PostData },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);
