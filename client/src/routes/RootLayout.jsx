import MainHeader from "@components/MainHeader";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
