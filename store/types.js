import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "all",
  },
  reducers: {
    filterGames: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

export const filterGames = typeSlice.actions.filterGames;
export default typeSlice.reducer;
