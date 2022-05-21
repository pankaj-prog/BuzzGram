import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  fetchingPosts: "idle",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.errors[0]);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("buzzgram-token");
    try {
      const { data } = await axios.post(
        "/api/posts/",
        { postData: post },
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.fetchingPosts = "pending";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.fetchingPosts = "fulfilled";
        state.posts = action.payload.posts;
      })
      .addCase(getPosts.rejected, (state) => {
        state.fetchingPosts = "rejected";
        toast.error(action.payload);
      })
      .addCase(createPost.pending, (state, action) => {
        state.fetchingPosts = "pending";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.fetchingPosts = "fulfilled";
        console.log("fulfilled", action);
        state.posts = action.payload.posts;
        toast.success("Post Created successfull");
      })
      .addCase(createPost.rejected, (state, action) => {
        state.fetchingPosts = "rejected";
        toast.error(action.payload);
      });
  },
});

export default postsSlice.reducer;
