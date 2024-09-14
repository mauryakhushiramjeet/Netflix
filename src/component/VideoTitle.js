import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <h1 className="text-lg py-6 w-1/4">{overview}</h1>
      <div>
        <button className="bg-white text-black p-4 px-14  text-xl rounded-lg hover:bg-opacity-70">
          <FontAwesomeIcon icon={faPlay} className="mr-2" /> Play
        </button>
        <button className="bg-gray-500 text-white mx-2 p-4 px-12  text-xl rounded-lg bg-opacity-50">ⓘ
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
