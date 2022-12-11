import React from "react";
import MutilRow from "../components/React_Slick/MutilRow";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeCarousel />
        <MutilRow />l
        <HomeMenu />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
