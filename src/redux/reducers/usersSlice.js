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
      });
  },
});

export default usersSlice.reducer;
