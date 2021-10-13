import { configureStore } from "@reduxjs/toolkit";
import discoverSlice from "./discoverSlice";

const store = configureStore({
    reducer: {
        discover: discoverSlice,
    }
})

export default store;