import React from "react";
import "../assets/css/Title.css";

const Title = () => {
  return (
    <div className="titleBody">
      <h1 className="heading">Download YTS YIFY movies: HD smallest size</h1>

      <p className="desc">
        Welcome to the official YTS.MX website. Here you can browse and download
        YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at
        the smallest file size. YTS Movies Torrents.
      </p>
      <div className="links">
        <a className="aO" href="">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </a>

        <a className="aT" href="">
          YTSMX_UPDATES | Follow @YTSYIFY for upcoming featured movies!
        </a>
      </div>
    </div>
  );
};

export default Title;
