import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  posts: [],
  bookmarks: [],
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

export const editPost = createAsyncThunk(
  "post/edit",
  async ({ postID, postData }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/posts/edit/${postID}`,
        { postData },
        { headers: { authorization: encodedToken } }
      );

      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (postID, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.delete(`/api/posts/${postID}`, {
        headers: { authorization: encodedToken },
      });
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getBookmarks = createAsyncThunk(
  "posts/getBookmarks",
  async (_, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.get("/api/users/bookmark", {
        headers: { authorization: encodedToken },
      });
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const addToBookmarks = createAsyncThunk(
  "posts/addToBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const removeFromBookmarks = createAsyncThunk(
  "posts/removeFromBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const postComment = createAsyncThunk(
  "posts/postComment",
  async ({ postId, comment }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/posts/comments/${postId}`,
        { comment },
        { headers: { authorization: encodedToken } }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.response);
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
        state.posts = action.payload.posts;
        toast.success("Post Created successfull");
      })
      .addCase(createPost.rejected, (state, action) => {
        state.fetchingPosts = "rejected";
        toast.error(action.payload);
      })
      .addCase(editPost.pending, (state) => {
        state.fetchingPosts = "pending";
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.fetchingPosts = "fulfilled";
        toast.success("Post Edited");
        state.posts = action.payload.posts;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.fetchingPosts = "rejected";
        toast.error(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        toast.success("Post Deleted");
        state.posts = action.payload.posts;
      })
      .addCase(deletePost.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(likePost.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(dislikePost.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(getBookmarks.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(addToBookmarks.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeFromBookmarks.rejected, (state, action) => {
        toast.error(action.payload);
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(postComment.rejected, (state, action) => {
        toast.error(action.payload);
      });
  },
});

export default postsSlice.reducer;
