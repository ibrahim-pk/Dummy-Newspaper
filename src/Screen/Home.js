import React from "react";
import Footer from "../Component/Footer/Footer";
import Carousel from "../Component/Header/Carousel";
import News from "../Component/News/News";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <News></News>
      <Footer></Footer>
    </div>
  );
};

export default Home;
