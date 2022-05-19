import { Header } from "components";
import React from "react";
import { Outlet } from "react-router-dom";

const UserRoutes = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-body">
        <Outlet />
      </main>
    </div>
  );
};

export default UserRoutes;
