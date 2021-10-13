import { configureStore } from "@reduxjs/toolkit";
import discoverSlice from "./discoverSlice";
import personSlice from "./personSlice";
import singleMovieSlice from "./singleMovieSlice";

const store = configureStore({
    reducer: {
        discover: discoverSlice,
        singleMovie: singleMovieSlice,
        person: personSlice
    }
})

export default store;