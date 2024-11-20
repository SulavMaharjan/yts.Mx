import React from "react";
import "../assets/css/ViewDetails.css";
import { useEffect, useState } from "react";
import { APILoadMovies } from "../API/movie";
import { APISuggestion } from "../API/movie";
import { APIMovieDetails } from "../API/movie";

const ViewDetails = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const res = await APILoadMovies();
    setMovies(res.data.movies);
    console.log(res.data.movies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  // const MovieDetails = async () => {
  //   const res = await APIMovieDetails();
  //   setMovies(res.data);
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   MovieDetails();
  // }, []);

  return (
    <div className="mainn">
      <div className="left">
        <div className="img-section">
          <img
            src="	https://img.yts.mx/assets/images/movies/saturday_night_2024/medium-cover.jpg"
            alt=""
          />
          <div className="detail-buttons">
            <button className="download"> Download </button>
            <button className="watch"> Watch Now </button>
          </div>
        </div>
        <div className="details-section">
          <div>
            <h1>Saturday Night</h1>
            <h2>2024</h2>
            <h2>Biography/Comedy/Drama/History</h2>
          </div>
          <div className="web">
            Available in:
            <button className="WEB">720p.WEB</button>
            <button className="WEB">1080p.WEB</button>
            <button className="WEB">1080p.WEB</button>
            <button className="WEB">2160p.WEB</button>
          </div>
          <p>WEB: same quality as BluRay</p>
          <button className="WEB subty">Download Subtitles</button>
          <div className="ratingss">
            <div>24</div>
            <div>7.2/10</div>
          </div>
        </div>
      </div>

      <div className="right">
        <p className="sim-movies">Similar movies</p>
        <div className="sim_img_box">
          {movies.slice(0, 4).map((item, key) => (
            <div key={key} className="similar">
              <img
                src={item.large_cover_image}
                alt=""
                height="100%"
                width="100%"
                className="post"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
