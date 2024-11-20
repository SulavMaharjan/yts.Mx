import React from "react";
import HeroComponent from "../component/HeroComponent";
import Latest from "../component/Latest";
import Upcoming from "../component/Upcoming";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <Latest />
      <Upcoming />
    </div>
  );
};

export default Home;
