import { createSlice } from "@reduxjs/toolkit";
import { handleFetchNews } from "./handlers";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default newsSlice.reducer;
