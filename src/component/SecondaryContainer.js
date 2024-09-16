import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return  movies&&(
    <div className="bg-black">
      <div className='-mt-60  pl-4 relative z-20'>
      <MovieList title={"NowPlaying Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"topRated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        {/* {console.log(movies.nowPopularMovies)} */}
        <MovieList title={"UpComming movies"} movies={movies.upCommingMovies}/>
        
        </div>
    </div>
  )
}

export default SecondaryContainer
