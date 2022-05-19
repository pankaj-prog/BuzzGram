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

import { UserRoutes, AuthRoutes } from "components";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname == "/") {
      navigate("/home", { replace: true });
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
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
  );
}

export default App;
