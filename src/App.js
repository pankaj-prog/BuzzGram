import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  Explore,
  Profile,
  Page404,
  PostPage,
  NewPost,
} from "pages";

import { UserRoutes, AuthRoutes, EditPostModal } from "components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getPosts } from "redux/reducers/postsSlice";
import { getUsers } from "redux/reducers/usersSlice";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname == "/") {
      navigate("/home", { replace: true });
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<UserRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="explore" element={<Explore />} />
          <Route path="post/:postID" element={<PostPage />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
