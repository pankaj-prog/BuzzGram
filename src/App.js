import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  Explore,
  Bookmark,
  Notification,
  Profile,
  Page404,
} from "pages";

import { UserRoutes, AuthRoutes } from "components";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserRoutes />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="explore" element={<Explore />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="notification" element={<Notification />} />
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
