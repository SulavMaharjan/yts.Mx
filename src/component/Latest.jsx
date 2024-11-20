import React from "react";
import "../assets/css/Latest.css";
import { IconStarFilled } from "@tabler/icons-react";
import Fight from "../assets/images/FightToLive.jpg";
import Santa from "../assets/images/SantaTell.jpg";
import Cats from "../assets/images/CatsAreBlack.jpg";
import nin from "../assets/images/1995.jpg";
import RightThere from "../assets/images/RightThere.jpg";
import Luminous from "../assets/images/Luminous.jpg";
import KillerEx from "../assets/images/KillerEx.jpg";
import Unwrapping from "../assets/images/Unwrapping.jpg";
import { useEffect, useState } from "react";
import { APILoadMovies } from "../API/movie";

const Latest = () => {
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

  // const latest = [
  //   {
  //     img: Fight,
  //     label: "Fight to Live",
  //     date: "2024",
  //     movDesc: {
  //       rating: "8 / 10",
  //       genre: "Action",
  //     },
  //   },
  //   {
  //     img: Santa,
  //     label: "Santa Tell Me",
  //     date: "2024",
  //     movDesc: {
  //       rating: "7.6 / 10",
  //       genre: "Romance",
  //     },
  //   },
  //   {
  //     img: Cats,
  //     label: "At Night All The Cats Are Black",
  //     date: "2022",
  //     movDesc: {
  //       rating: "4.3 / 10",
  //       genre: "Fantasy",
  //     },
  //   },
  //   {
  //     img: nin,
  //     label: "1995",
  //     date: "2024",
  //     movDesc: {
  //       rating: "7.1 / 10",
  //       genre: "Comedy",
  //     },
  //   },
  //   {
  //     img: RightThere,
  //     label: "I'll Be Right There",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 6.1 / 10",
  //       genre: "Comedy",
  //     },
  //   },

  //   {
  //     img: Luminous,
  //     label: "Luminous",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 8.4 / 10 ",
  //       genre: "Action",
  //     },
  //   },

  //   {
  //     img: KillerEx,
  //     label: "Killer Ex",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 6 /  10",
  //       genre: "Action",
  //     },
  //   },

  //   {
  //     img: Unwrapping,
  //     label: "Unwrapping Christmas",
  //     date: "2024",
  //     movDesc: {
  //       rating: " 6.6 / 10 ",
  //       genre: "Romance",
  //     },
  //   },
  // ];

  return (
    <div className="latest">
      <div className="recommends ">
        <div className="yify">
          <div className="yify-t">Latest YIFY Movies Torrents</div>
          <div>
            <p className="brow">Browse All</p>
          </div>
        </div>
        <div className="movies ">
          {movies.slice(0, 8).map((item, key) => (
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

export default Latest;
