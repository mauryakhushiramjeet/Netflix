import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
import gptReduce from "../utils/gptSlice";
import configRedure from"../utils/configSlice"
const appStore = configureStore({
  reducer: {
    user: userReduser,
    movies: moviesReducer,
    gpt: gptReduce,
    config:configRedure
  },
});
export default appStore;
