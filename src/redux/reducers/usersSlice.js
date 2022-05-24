import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  fetchingUsers: "idle",
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.errors[0]);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ followUserId }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.error}`);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ followUserId }, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("buzzgram-token");
      const { data } = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: encodedToken } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.fetchingUsers = "pending";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.fetchingUsers = "fulfilled";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.fetchingUsers = "rejected";
        toast.error(action.payload);
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const { user, followUser } = action.payload;
        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const { user, followUser } = action.payload;

        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.username === action.payload.user.username
            ? action.payload.user
            : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        toast.error(action.payload);
      });
  },
});

export default usersSlice.reducer;
