import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsState } from "./slices.types";

const initialState: IPostsState = {
  postsData: { limit: 0, posts: [], skip: NaN, total: NaN },
  isLoadind: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "postsData",
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoadind = true;
    },
    postsFetchingSuccess(
      state,
      action: PayloadAction<IPostsState["postsData"]>
    ) {
      state.postsData = action.payload;
      state.isLoadind = false;
      state.error = "";
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoadind = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
