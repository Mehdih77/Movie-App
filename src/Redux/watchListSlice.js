import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const watchListAdapter = createEntityAdapter();

const initialState = watchListAdapter.getInitialState();

export const {
    selectAll: selectAllWatchList
} = watchListAdapter.getSelectors((state) => state.watchList);

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: watchListAdapter.addOne,
    removeFromWatchList: (state, action) => {
      watchListAdapter.removeOne(state, action);
    },
  },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
