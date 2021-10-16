import { configureStore } from "@reduxjs/toolkit";
import discoverSlice from "./discoverSlice";
import genreSlice from "./genreSlice";
import personSlice from "./personSlice";
import searchSlice from "./searchSlice";
import singleMovieSlice from "./singleMovieSlice";
import singleTvSlice from "./singleTvSlice";
import trendingSlice from "./trendingSlice";
import tvSlice from "./tvSlice";
import watchListSlice from "./watchListSlice";

const store = configureStore({
    reducer: {
        discover: discoverSlice,
        singleMovie: singleMovieSlice,
        person: personSlice,
        trending: trendingSlice,
        singleTv: singleTvSlice,
        tvs: tvSlice,
        genre: genreSlice,
        search: searchSlice,
        watchList: watchListSlice
    }
})

export default store;