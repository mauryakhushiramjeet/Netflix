import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../component/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)
    const getNowPlayingMoveis = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
    !topRatedMovies&&  getNowPlayingMoveis();
    });
}
export default useTopRatedMovies;