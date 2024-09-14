import React from "react";
import Header from "./Header";
 import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
 import SecondaryContainer from "../component/SecondaryContainer"
 import MainContainer from "../component/MainContainer"

const Browse = () => {
 useNowPlayingMovies()
  return (
    <div>
      <Header />
     <MainContainer/>
     <SecondaryContainer/>
    </div>
  );
};

export default Browse;
