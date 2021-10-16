import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPerson = createAsyncThunk("person/fetchPerson", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/person/${params.id}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

export const fetchPersonSimilar = createAsyncThunk("person/fetchPersonSimilar", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${params.id}&with_watch_monetization_types=flatrate`);
    return await response.data.results;
})

const initialState = {
    person: [],
    similar: []
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    extraReducers:{
        [fetchPerson.fulfilled]: (state,action) => {
            state.person = action.payload;
        },
        [fetchPersonSimilar.fulfilled]: (state,action) => {
            state.similar = action.payload;
        }
    }
})

export default personSlice.reducer;

export const getPerson = (state) => state.person.person;
export const getSinglePersonSimilar = (state) => state.person.similar;
