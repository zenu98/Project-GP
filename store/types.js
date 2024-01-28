import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "all",
    platform: "PC",
  },
  reducers: {
    filterGames: (state, action) => {
      state.type = action.payload.type;
    },
    filterPlatform: (state, action) => {
      state.platform = action.payload.platform;
    },
  },
});

export const filterGames = typeSlice.actions.filterGames;
export const filterPlatform = typeSlice.actions.filterPlatform;
export default typeSlice.reducer;
