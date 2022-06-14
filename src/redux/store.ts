import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";
import onePostReducer from "./reducers/onePostSlice";

export const store = configureStore({
  reducer: {
    postsReducer,
    onePostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
