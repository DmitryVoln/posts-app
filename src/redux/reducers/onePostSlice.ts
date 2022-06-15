import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOnePostState } from "./slices.types";

const initialState: IOnePostState = {
  postData: {
    body: "",
    id: "",
    reactions: NaN,
    tags: [],
    title: "",
    userId: NaN,
  },
  isLoadind: false,
  error: "",
};

export const onePostSlice = createSlice({
  name: "postData",
  initialState,
  reducers: {
    postFetching(state) {
      state.isLoadind = true;
    },
    postFetchingSuccess(
      state,
      action: PayloadAction<IOnePostState["postData"]>
    ) {
      state.postData = action.payload;
      state.isLoadind = false;
      state.error = "";
    },
    postFetchingError(state, action: PayloadAction<string>) {
      state.isLoadind = false;
      state.error = action.payload;
    },
    clearState() {
      return initialState;
    },
  },
});
export const { clearState } = onePostSlice.actions;
export default onePostSlice.reducer;
