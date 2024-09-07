import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../utils/userSlice"
const appStore = configureStore({
    reducer: {
        user: userReduser,

    }
})
export default appStore;