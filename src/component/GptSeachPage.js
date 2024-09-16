import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "./Constants";
const GptSeach = () => {
  return (
    <div>
      <div className="absolute bg-cover -z-10">
        <img
          src={BG_URL}
          alt="bgImage"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSeach;
