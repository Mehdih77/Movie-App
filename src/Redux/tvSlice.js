import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//! get top rated tv OR popular

export const fetchTvs = createAsyncThunk("tv/fetchTvs", async(params) => {
    const response = await axios
    .get(`http://api.themoviedb.org/3/tv/${params.path}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&page=${params.pageNumber}`)
    return await response.data.results;
})

const initialState = {
    tvs: [],
}

const tvSlice = createSlice({
    name: 'tvs',
    initialState,
    extraReducers:{
        [fetchTvs.fulfilled]: (state,action) => {
            state.tvs = action.payload;
        }
    }
})

export default tvSlice.reducer;

// selectors
export const getTvs = (state) => state.tvs.tv;
