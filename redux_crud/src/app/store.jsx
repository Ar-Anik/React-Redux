import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
  },
});

export default store;
