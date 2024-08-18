import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Posts from "./routes/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost from "./routes/NewPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);
