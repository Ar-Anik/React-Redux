import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/Counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
