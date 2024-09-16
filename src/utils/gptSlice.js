import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
