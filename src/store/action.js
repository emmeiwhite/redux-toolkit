import { createAction } from "@reduxjs/toolkit";
// This is an action creator, and we'll resume it in both of our slices to reset the state
export const reset = createAction("app/reset");
