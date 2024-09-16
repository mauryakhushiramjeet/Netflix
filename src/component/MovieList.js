import React from "react";
import MovieCards from "./MovieCards";
import "../Style/MovieList.css";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  //   console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="font-bold text-3xl py-5 text-white">{title}</h1>
      <div className=" scroll-div flex overflow-x-scroll  cursor-pointer">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
