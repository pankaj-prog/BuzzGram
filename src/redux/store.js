import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import usersReducder from "./reducers/usersSlice";
import postsSlice from "./reducers/postsSlice";
import usersSlice from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsSlice,
    users: usersSlice,
  },
});
