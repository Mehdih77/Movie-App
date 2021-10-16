import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (params) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&query=${params.query}&page=${params.pageNumber}&include_adult=false`
    );
    return await {
      response: response.data.results,
      totalResult: response.data.total_results,
    };
  }
);

const initialState = {
  searchMovie: [],
  serachTotalResult: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [fetchSearch.fulfilled]: (state, action) => {
      state.searchMovie = action.payload.response;
      state.serachTotalResult = action.payload.totalResult;
    },
  },
});

export default searchSlice.reducer;

export const getSearchMovie = (state) => state.search.searchMovie;
export const getSerachTotalResult = (state) => state.search.serachTotalResult;
