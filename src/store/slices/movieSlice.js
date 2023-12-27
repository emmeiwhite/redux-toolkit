import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },

    removeMovie(state, action) {
      // action.payload === string, the song we want to delete

      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },

    // Here reset only resets the movies

    // reset(state, action) {
    //   return [];
    // },

    /** We'll create our manual action! Instead of using the same reset action in the SongsSlide Combined reducer! */
  },

  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
