import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    query: "",
    loading: true,
    errorMessage: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews: (state, action) => ({
      ...state,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
});

export const { setNews, getNews, setLoading, setErrorMessage, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
