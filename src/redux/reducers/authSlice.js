import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("buzzgram-user")) ?? null,
  encodedToken: localStorage.getItem("buzzgram-token") ?? null,
  isLoggedIn: Boolean(localStorage.getItem("buzzgram-token")),
  loading: false,
  error: null,
};

// handles login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", loginData);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.errors[0]);
    }
  }
);

// handles signup
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (signUpData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", signUpData);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // handle logout
    logoutUser: (state) => {
      (state.user = null),
        (state.encodedToken = null),
        (state.isLoggedIn = false),
        (state.loading = false),
        (state.error = null),
        localStorage.removeItem("buzzgram-user");
      localStorage.removeItem("buzzgram-token");
    },
  },

  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.foundUser;
        state.encodedToken = action.payload.encodedToken;
        state.isLoggedIn = true;
        localStorage.setItem(
          "buzzgram-user",
          JSON.stringify(action.payload.foundUser)
        );
        localStorage.setItem("buzzgram-token", action.payload.encodedToken);
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.createdUser;
        state.encodedToken = action.payload.encodedToken;
        state.isLoggedIn = true;
        localStorage.setItem(
          "buzzgram-user",
          JSON.stringify(action.payload.createdUser)
        );
        localStorage.setItem("buzzgram-token", action.payload.encodedToken);
        toast.success("User created successfully");
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
