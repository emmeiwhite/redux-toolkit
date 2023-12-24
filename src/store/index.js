import { configureStore, createSlice } from "@reduxjs/toolkit";

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
    resetSongs(state, action) {
      return [];
    },
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
    reset(state, action) {
      return [];
    },
  },
});
/* ---
const resetSlice = createSlice({
  name: "reset",
  initialState: [],
    reducers: {
        resetAll(state, action) {
            
      }
  },
});
--- */
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
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
