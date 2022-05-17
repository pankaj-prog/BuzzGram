import React from "react";
import { Outlet } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthRoutes;
