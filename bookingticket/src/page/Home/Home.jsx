import React from "react";
import MutilRow from "../../components/React_Slick/MutilRow";
import HomeCarousel from "../../layout/homeCarousel/HomeCarousel";
import HomeMenu from "../../layout/HomeMenu/HomeMenu";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <MutilRow />
      <HomeMenu />
    </div>
  );
};

export default Home;
