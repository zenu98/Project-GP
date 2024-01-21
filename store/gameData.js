import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../data/dummy-data";
const gamesSlice = createSlice({
  name: "games",
  initialState: {
    data: { CATEGORIES },
  },
  reducers: {},
});

export default gamesSlice.reducer;