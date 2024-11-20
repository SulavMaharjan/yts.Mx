import React from "react";
import "../assets/css/Recomovie.css";
import oldass from "../assets/images/oldass.jpg";
import outrun from "../assets/images/outrun.jpg";
import apprentice from "../assets/images/apprentice.jpg";
import blackwater from "../assets/images/blackwater.jpg";
import { IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { APILoadMovies } from "../API/movie";

const RecoMovies = () => {
  const [movies, setMovies] = useState([]);
  // const navigate = useNavigate();
  const loadMovies = async () => {
    const res = await APILoadMovies();
    setMovies(res.data.movies);
    console.log(res.data.movies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  // const movies = [
  //   {
  //     img: oldass,
  //     label: "My Old Ass",
  //     date: "2024",
  //     movDesc: {
  //       rating: "7.1 / 10",
  //       genre: "Comedy Drama",
  //     },
  //   },
  //   {
  //     img: outrun,
  //     label: "The Outrun",
  //     date: "2024",
  //     movDesc: {
  //       rating: "7 / 10",
  //       genre: "Drama",
  //     },
  //   },
  //   {
  //     img: apprentice,
  //     label: "The Apprentice",
  //     date: "2024",
  //     movDesc: {
  //       rating: "8.2 / 10",
  //       genre: "Adventure",
  //     },
  //   },
  //   {
  //     img: blackwater,
  //     label: "BlackWater Lane",
  //     date: "2024",
  //     movDesc: {
  //       rating: "9 / 10",
  //       genre: "Suspence Thriller",
  //     },
  //   },
  // ];

  return (
    <div>
      <div className="recommends">
      <div className="popular">
            <div className="rating-star">
              <IconStarFilled />
            </div>
            <p className="popu">Popular Downloads</p>
          </div>

          <div className="more">
            <a href="" className="fea">more featured...</a>
          </div>
        {/* <div className="oldass-div">
          <img
            className="oldass"
            src="https://yts.mx/assets/images/movies/my_old_ass_2024/medium-cover.jpg"
            alt=""
          />
          <p className="M-title">My Old Ass</p>
          <p className="date">2024</p>
        </div> */}
        <div className="movies">
          {movies.slice(0, 4).map((item, key) => (
            <div key={key}>
              <a href="">
                <div className="Cards">
                  <img src={item.large_cover_image} alt="" className="poster" />
                  <div className="movieDetails">
                    <div>
                      <div className="rating-star">
                        <IconStarFilled />
                      </div>
                      <div className="rate">{item.rating}</div>
                    </div>

                    <div className="gen">{item.genres}</div>

                    <a href="http://localhost:5173/movie-details">
                      <button className="viewDetails">View Details</button>
                    </a>

                    {/* if many subitems */}
                    {/* {item.movDesc.map((subitem, key) => {
                      return (
                        <div key={key}>
                          <div>
                            <IconStarFilled />
                            {subitem.rating}
                          </div>
                          <div>{subitem.genre}</div>
                        </div>
                      );
                    })} */}
                  </div>
                  <div className="M-title">{item.title}</div>
                  <div className="date">{item.year}</div>
                </div>
              </a>
            </div>
          ))}
       
        </div>

      
      </div>
    </div>
  );
};

export default RecoMovies;
