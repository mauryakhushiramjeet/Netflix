import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies:null,
    tailerVideo:null,
    popularMovies: null,
    upCommingMovies:null,
    topRatedMovies:null,
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovies=action.payload
    },
    addTrailerVideo:(state,action)=>{
      state.tailerVideo=action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcommingMovies:(state,action)=>{
      state.upCommingMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
   
}});
export const{addNowPlayingMovie,addTrailerVideo,addPopularMovies,addUpcommingMovies,addTopRatedMovies}=moviesSlice.actions;
export default moviesSlice.reducer