import { Header } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const UserRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  return isLoggedIn ? (
    <div className="app">
      <Header />
      <main className="app-body">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default UserRoutes;
