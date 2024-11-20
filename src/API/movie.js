import { GetRequest } from "../plugins/http";

export const APILoadMovies = () => {
  return GetRequest("list_movies.json");
};

export const APIMovieDetails = () => {
  return GetRequest("movie_details.json");
};

export const APISuggestion = () =>{
  return GetRequest("movie_suggestions.json");
};

// export const APISearchMovies = (keyword) => {
//   return GetRequest("list_movies.json?query_term=" + keyword);
// };

// export const APISearchMoviesParams = (keyword) => {
//   return GetRequest("list_movies.json", {
//     params: {
//       query_term: keyword,
//     },
//   });
// };
