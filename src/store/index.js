import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

// This is an action creator, and we'll resume it in both of our slices to reset the state
export const reset = createAction("app/reset");

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

// Our one Store
const store = configureStore({
  // this reducer acts like a rootReducer in redux
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
//Action Creators to be used in particular component where ever required
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
