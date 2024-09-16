import React from 'react'
import { IMG_CDN_URL } from './Constants'
const MovieCards = ({posterPath}) => {
  return (
    <div className='w-48 pr-4  hover:scale-150 transition-all duration-[1s] '>
      <img src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCards
