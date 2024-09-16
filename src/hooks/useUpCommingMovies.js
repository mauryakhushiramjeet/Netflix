import { useEffect } from "react";
import { API_OPTIONS } from "../component/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/moviesSlice";
const UpCommingMovies = () => {
  const dispatch = useDispatch();
  const upCommingMovies=useSelector((store)=>store.movies.upCommingMovies)
  const getNowPlayingMoveis = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results)
    dispatch(addUpcommingMovies(json.results));
  };
  useEffect(() => {
  !upCommingMovies&&  getNowPlayingMoveis();
  });
};
export default UpCommingMovies;
