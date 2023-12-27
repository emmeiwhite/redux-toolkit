import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./action";

// Our one Store
const store = configureStore({
  // this reducer acts like a rootReducer in redux
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store };
export { addMovie, removeMovie, addSong, removeSong, reset };
