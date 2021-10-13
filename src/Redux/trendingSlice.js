import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk("trending/fetchTrending", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/trending/${params.type}/week?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182`);
    return await response.data.results;
})

const initialState = {
    trending: [],
}

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    extraReducers:{
        [fetchTrending.fulfilled]: (state,action) => {
            state.trending = action.payload;
        }
    }
})

export default trendingSlice.reducer;

export const getTrending = (state) => state.trending.trending;
