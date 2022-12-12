import React from "react";
import { Route, Routes } from "react-router";
import Contact from "../page/contact/Contact";
import DetailFilm from "../page/DetailFilm/DetailFilm";
import Home from "../page/Home/Home";
import News from "../page/news/News";
import Page404 from "../page/Page404/Page404";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<DetailFilm />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
