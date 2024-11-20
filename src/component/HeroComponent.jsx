import React from "react";
import Title from "./title";
// import bgImg from'../assets/images/bgImg.jpg'
import "../assets/css/Herocomponent.css";
import RecoMovies from "./recoMovies";

const HeroComponent = () => {
  return (
    <div className="hero">
      <Title />
      <RecoMovies/>
    </div>
  );
};

export default HeroComponent;
