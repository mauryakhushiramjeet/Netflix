import { useEffect } from "react";
import { API_OPTIONS } from "../component/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getNowPopularMoveis = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
  !popularMovies&&getNowPopularMoveis();
  }, []);
};

export default usePopulerMovies;
