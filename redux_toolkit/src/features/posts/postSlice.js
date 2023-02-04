import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postSlice = createSlice({
  name: "posts",

  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },

  extraReducers: (builders) => {
    builders.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builders.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = [];
    });
    builders.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
