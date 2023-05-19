import { Outlet } from "react-router-dom";
import React from "react";
import MainNavBar from "../components/MainNavBar";
const RootLayout = () => {
  return (
    <React.Fragment>
      <MainNavBar />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
