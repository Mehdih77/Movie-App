import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleTv = createAsyncThunk("singleTv/fetchSingleTv", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

export const fetchSingleTvCredits = createAsyncThunk("singleTv/fetchSingleTvCredits", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

export const fetchSingleTvSimilar = createAsyncThunk("singleTv/fetchSingleTvSimilar", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&page=1`);
    return await response.data.results;
})

const initialState = {
    tv: [],
    credits: [],
    similar: []
}

const singleTvSlice = createSlice({
    name: 'singleTv',
    initialState,
    extraReducers:{
        [fetchSingleTv.fulfilled]: (state,action) => {
            state.movie = action.payload;
        },
        [fetchSingleTvCredits.fulfilled]: (state,action) => {
            state.credits = action.payload;
        },
        [fetchSingleTvSimilar.fulfilled]: (state,action) => {
            state.similar = action.payload;
        }
    }
})

export default singleTvSlice.reducer;

// selectors
export const getSingleTv = (state) => state.singleTv.movie;
export const getSingleTvCredits = (state) => state.singleTv.credits;
export const getSingleTvSimilar = (state) => state.singleTv.similar;
