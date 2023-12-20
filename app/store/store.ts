import { configureStore } from "@reduxjs/toolkit";
import favSliceReducer from "./favSlice";
import searchSliceReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        favorites: favSliceReducer,
        search: searchSliceReducer,
    }
})

export default store;