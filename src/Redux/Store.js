import { configureStore } from "@reduxjs/toolkit";
import discoverSlice from "./discoverSlice";
import genreSlice from "./genreSlice";
import personSlice from "./personSlice";
import singleMovieSlice from "./singleMovieSlice";
import singleTvSlice from "./singleTvSlice";
import trendingSlice from "./trendingSlice";
import tvSlice from "./tvSlice";

const store = configureStore({
    reducer: {
        discover: discoverSlice,
        singleMovie: singleMovieSlice,
        person: personSlice,
        trending: trendingSlice,
        singleTv: singleTvSlice,
        tvs: tvSlice,
        genre: genreSlice
    }
})

export default store;