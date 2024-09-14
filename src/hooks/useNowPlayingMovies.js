import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../component/Constants";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoveis = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    getNowPlayingMoveis();
  }, []);
};

export default useNowPlayingMovies;
