import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineHome,
  MdOutlineExplore,
  AiOutlineUser,
} from "assets/icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="app-header-wrapper gutter-bottom-24">
      <header className="app-header">
        <h3 className="app-name">BuzzGram</h3>
        <button
          onClick={() => navigate("/newpost")}
          className="btn btn-solid-primary btn-rc"
        >
          <AiOutlinePlus /> Post
        </button>
        <nav className="nav-wrapper">
          <NavLink to="/home" className="btn-lg link">
            <AiOutlineHome />
          </NavLink>
          <NavLink to="/explore" className="btn-lg link">
            <MdOutlineExplore />
          </NavLink>
          <NavLink to="/profile" className="btn-lg link">
            <AiOutlineUser />
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
