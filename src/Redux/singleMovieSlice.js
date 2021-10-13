import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleMovie = createAsyncThunk("singleMovie/fetchSingleMovie", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

export const fetchSingleMovieCredits = createAsyncThunk("singleMovie/fetchSingleMovieCredits", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

export const fetchSingleMovieSimilar = createAsyncThunk("singleMovie/fetchSingleMovieSimilar", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&page=1`);
    return await response.data.results;
})


const initialState = {
    movie: [],
    credits: [],
    similar: []
}

const singleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    extraReducers:{
        [fetchSingleMovie.fulfilled]: (state,action) => {
            state.movie = action.payload;
        },
        [fetchSingleMovieCredits.fulfilled]: (state,action) => {
            state.credits = action.payload;
        },
        [fetchSingleMovieSimilar.fulfilled]: (state,action) => {
            state.similar = action.payload;
        }
    }
})

export default singleMovieSlice.reducer;

export const getSingleMovie = (state) => state.singleMovie.movie;
export const getSingleMovieCredits = (state) => state.singleMovie.credits;
export const getSingleMovieSimilar = (state) => state.singleMovie.similar;
