import { configureStore } from "@reduxjs/toolkit";
import discoverSlice from "./discoverSlice";
import personSlice from "./personSlice";
import singleMovieSlice from "./singleMovieSlice";
import trendingSlice from "./trendingSlice";

const store = configureStore({
    reducer: {
        discover: discoverSlice,
        singleMovie: singleMovieSlice,
        person: personSlice,
        trending: trendingSlice
    }
})

export default store;