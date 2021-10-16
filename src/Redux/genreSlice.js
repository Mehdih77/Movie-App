import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenresType = createAsyncThunk(
  "genre/fetchGenresType",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`
    );
    return await response.data.genres;
  }
);

export const fetchGenresMovie = createAsyncThunk(
  "genre/fetchGenresMovie",
  async (params) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${params.pageNumber}&with_genres=${params.genreId}&with_watch_monetization_types=flatrate`
    );
    return await {
        response: response.data.results,
        totalResults: response.data.total_results,
  };
});

const initialState = {
  genresType: [],
  genresMovie: [],
  genreTotalResult: ""
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: {
    [fetchGenresType.fulfilled]: (state, action) => {
      state.genresType = action.payload;
    },
    [fetchGenresMovie.fulfilled]: (state, action) => {
      state.genresMovie = action.payload.response;
      state.genreTotalResult = action.payload.totalResults
    },
  },
});

export default genreSlice.reducer;

export const getGenresType = (state) => state.genre.genresType;
export const getGenresMovie = (state) => state.genre.genresMovie;
export const getGenresTotalResult = (state) => state.genre.genreTotalResult;
