import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },

    removeSong(state, action) {
      //
    },
  },
});

// Our one Store
const store = configureStore({
  // this reducer acts like a rootReducer in redux
  reducer: {
    songs: songsSlice.reducer,
  },
});

// console.log(songsSlice.actions); // actions should have been action creators
// console.log(songsSlice.actions.addSong()); // actions should have been action creators
// console.log(songsSlice.actions.addSong("payload string")); // actions should have been action creators
// console.log(store.getState());

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!",
// });

// const finalState = store.getState();
// console.log(finalState);

export { store };
//Action Creator
export const { addSong } = songsSlice.actions;
