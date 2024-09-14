import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../utils/userSlice"
import moviesReducer from"../utils/moviesSlice"
const appStore = configureStore({
    reducer: {
        user: userReduser,
movies:moviesReducer
    }
})
export default appStore;