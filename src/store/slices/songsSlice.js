import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      // action.payload === string, the song we want to delete
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  /** This is a special  */
  extraReducers(builder) {
    /* ---
    builder.addCase("movie/reset", (state, action) => {
      return [];
    });
    --- */
    // "movie/reset" === moviesSlice.actions.reset.toString()
    /* ---
    builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
      return [];
    });
     --- */

    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions; // It returns action creator function

export const songsReducer = songsSlice.reducer;
