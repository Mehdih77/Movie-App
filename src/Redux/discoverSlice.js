import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDiscoverMovies = createAsyncThunk("discover/fetchDiscover", async(params) => {
    const response = await axios
    .get(`http://api.themoviedb.org/3/movie/${params.path}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&page=${params.pageNumber}`)
    return await {
        response: response.data.results,
        totalPages: response.data.total_pages,
        totalResults: response.data.total_results
    };
})

const initialState = {
    movies: [],
    totalPages: '',
    totalResults: ''
}


const discoverSlice = createSlice({
    name: 'discover',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchDiscoverMovies.fulfilled]: (state,action) => {
            state.movies = action.payload.response;
            state.totalPages = action.payload.totalPages;
            state.totalResults = action.payload.totalResults;
        }
    }
})

export const {} = discoverSlice.actions;

export default discoverSlice.reducer;

export const getMoviesList = (state) => state.discover.movies;