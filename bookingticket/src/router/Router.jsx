import React from "react";
import { useRoutes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Contact from "../page/contact/Contact";
import DetailFilm from "../page/DetailFilm/DetailFilm";
import Home from "../page/Home/Home";
import News from "../page/news/News";
import Page404 from "../page/Page404/Page404";
import User from "../page/User/User";

const Router = () => {
  const routing = useRoutes([
    {
      path: "user",
      element: <User />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/detail/:id",
          element: <DetailFilm />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
