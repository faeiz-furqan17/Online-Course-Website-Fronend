import React from "react";
import { Outlet } from "react-router-dom";
import AppBarComp from "../components/AppBar-comp/AppBarComp";

function Layout() {
  return (
    <div>
      <AppBarComp />
      <Outlet />
    </div>
  );
}

export default Layout;
