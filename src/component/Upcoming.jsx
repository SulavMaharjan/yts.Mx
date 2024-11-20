import React from "react";
import "../assets/css/Upcoming.css";
import Elvis from "../assets/images/Elvis.jpg";
import Emilia from "../assets/images/Emilia.jpg";
import women from "../assets/images/womenCondemned.jpg";
import Blot from "../assets/images/Blot.jpg";
import Highway from "../assets/images/Highway65.jpg";
import megalopolis from "../assets/images/Megalopolis.jpg";
import Saturday from "../assets/images/SaturdayNight.jpg";
import Monster from "../assets/images/monsterSummer.jpg";
import { IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { APILoadMovies } from "../API/movie";

const Upcoming = () => {
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

  // const Upcomming = [
  //   {
  //     img: Elvis,
  //     label: "Return of the King",
  //     date: "2024",
  //     movDesc: {
  //       rating: "8 / 10",
  //       genre: "Action",
  //     },
  //   },
  //   {
  //     img: Emilia,
  //     label: "Emilia Perez",
  //     date: "2024",
  //     movDesc: {
  //       rating: "7.6 / 10",
  //       genre: "Story",
  //     },
  //   },
  //   {
  //     img: women,
  //     label: "The Women Condemned",
  //     date: "1934",
  //     movDesc: {
  //       rating: "7 / 10",
  //       genre: "Fantasy",
  //     },
  //   },
  //   {
  //     img: Blot,
  //     label: "The Blot",
  //     date: "1921",
  //     movDesc: {
  //       rating: "6.7 / 10",
  //       genre: "Action Drama",
  //     },
  //   },
  //   {
  //     img: Highway,
  //     label: "Highway 65",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 6.8 / 10",
  //       genre: "Drama",
  //     },
  //   },

  //   {
  //     img: megalopolis,
  //     label: "Megalopolis",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 5.1 / 10 ",
  //       genre: "Drama Fantasy",
  //     },
  //   },

  //   {
  //     img: Saturday,
  //     label: "Saturday Night",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 7.4 /  10",
  //       genre: "Biography Comedy",
  //     },
  //   },

  //   {
  //     img: Monster,
  //     label: "Monster Summer",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 6.9 / 10 ",
  //       genre: "Horror",
  //     },
  //   },
  // ];

  return (
    <div className="upcoming">
      <div className="recommends">
        <div className="yify">
          <div className="yify-t">Upcoming YIFY Movies</div>
          <div>
            <p className="brow">Request a Movie</p>
          </div>
        </div>
        <div className="movies">
          {movies.slice(0, 8).map((item, key) => (
            <div key={key}>
              <a href="">
                <div className="Cards">
                  <div className="poster">
                    <img
                      src={item.large_cover_image}
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="movieDetails">
                    <div>
                      <div className="rating-star">
                        <IconStarFilled />
                      </div>
                      <div className="rate">{item.rating}</div>
                    </div>

                    <div className="gen">{item.genres}</div>

                    <button className="viewDetails">View Details</button>
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

export default Upcoming;
