import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "../component/SecondaryContainer";
import MainContainer from "../component/MainContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import UpCommingMovies from "../hooks/useUpCommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSeachPage from "./GptSeachPage";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  useNowPlayingMovies();
  usePopulerMovies();
  UpCommingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      if
      {showGptSearch ? (
        <GptSeachPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
