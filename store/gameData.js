import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../data/dummy-data";
import { ListOfGames } from "../data/dummy-data";
const gamesSlice = createSlice({
  name: "games",
  initialState: {
    data: { CATEGORIES },
    datas: { ListOfGames },
  },
  reducers: {},
});

export default gamesSlice.reducer;
