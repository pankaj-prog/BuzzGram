import React from "react";
import { Outlet } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <div className="app">
      <header className="app-auth-header text-center gutter-bottom-24 h4">
        <span>BuzzGram</span>
      </header>
      <div className="app-body">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoutes;
