import { createSlice } from "@reduxjs/toolkit";
import { platform } from "../data/dummy-data";
import { ListOfGames } from "../data/dummy-data";
const gamesSlice = createSlice({
  name: "games",
  initialState: {
    datas: ListOfGames,
    platforms: platform,
  },
  reducers: {},
});

export default gamesSlice.reducer;
