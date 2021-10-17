import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideoMovie = createAsyncThunk("video/fetchVideoMovie", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data.results;
})

export const fetchVideoTv = createAsyncThunk("video/fetchVideoTv", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data.results;
})

const initialState = {
    video: [],
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers:{
        [fetchVideoMovie.fulfilled]: (state,action) => {
            state.video = action.payload;
        },
        [fetchVideoTv.fulfilled]: (state,action) => {
            state.video = action.payload;
        },
    }
})

export default videoSlice.reducer;

export const getVideo = (state) => state.video.video;
