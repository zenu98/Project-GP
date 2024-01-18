import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    type: "all",
  },
  reducers: {
    filterGames: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const filterGames = gamesSlice.actions.filterGames;
export default gamesSlice.reducer;
