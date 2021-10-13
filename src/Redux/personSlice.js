import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPerson = createAsyncThunk("person/fetchPerson", async(params) => {
    const response = await axios
    .get(`https://api.themoviedb.org/3/person/${params.id}?api_key=81e6c83ddfd9e06a0fb3cf0012fcf182&language=en-US`);
    return await response.data;
})

const initialState = {
    person: [],
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    extraReducers:{
        [fetchPerson.fulfilled]: (state,action) => {
            state.person = action.payload;
        }
    }
})

export default personSlice.reducer;

export const getPerson = (state) => state.person.person;
