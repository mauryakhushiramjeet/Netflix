import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey=useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="bg-black w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptsearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
