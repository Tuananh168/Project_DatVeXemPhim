import React from "react";
import { useRoutes } from "react-router";
import MainLayout from "../layout/MainLayout";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [],
    },
  ]);
  return routing;
};

export default Router;
