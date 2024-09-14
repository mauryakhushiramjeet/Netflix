import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies:null,
    tailerVideo:null
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
        state.nowPlayingMovies=action.payload
    },
    addTrailerVideo:(state,action)=>{
      state.tailerVideo=action.payload
    }
  }
});
export const{addNowPlayingMovie,addTrailerVideo}=moviesSlice.actions;
export default moviesSlice.reducer